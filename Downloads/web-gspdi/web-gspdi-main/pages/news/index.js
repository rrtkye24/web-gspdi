import { Box, Flex, Button, Image, Container, Heading, Stack } from "@chakra-ui/react"
import { client, sanityImageUrl } from "../../sanity"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { useState } from "react"
// Local
import NavigationBar from "../../components/NavigationBar"
import Footer from "../../components/Footer"
function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "Berita - GSPDI Filadelfia Indonesia",
    description:
      "To love one another in Christ, to empower and unify youths in local churches. " +
      "Biro Pemuda dan Anak Hamba Tuhan Gereja Sidang Pantekosta Di Indonesia.",
  }
  return (
    <NextSeo
      title={seoConfig.title}
      description={seoConfig.description}
      openGraph={{
        url: seoConfig.url,
        title: seoConfig.title,
        description: seoConfig.description,
        site_name: seoConfig.url,
      }}
    />
  )
}

function Post({ mainImageUrl, title, _updatedAt, slug }) {
  return (
    <Link href={`/news/${slug.current}`} passHref>
      <div className="post">
        <div className="post-img">
          <Image src={mainImageUrl} alt={title} />
        </div>

        <Box className="post-details">
          <div className="title">{title}</div>
          {/* <div className="excerpt">{excerpt}</div> */}
          <div className="published-at">
            {new Date(_updatedAt).toDateString().slice(4)}
          </div>
        </Box>
      </div>
    </Link>
  )
}

export default function Berita({ recentPosts }) {
  const [posts, setPosts] = useState(recentPosts)
  const [isLoading, setIsLoading] = useState(false)

  //TODO: sanity cors error, allow cors on sanity for domain and localhost:3000
  const fetchPosts = async () => {
    setIsLoading(true)
    const postCount = posts.length
    const perPage = 9

    try {
      const recentPosts = await client.fetch(
        `*[_type == 'post' && "Berita" in categories[]->title ] | order(_publishedAt desc)[${postCount}..${postCount + perPage
        }]{
              slug,
              title,
              excerpt,
              description,
              mainImage,
              _updatedAt
            }`
      )

      const parsedRecentPosts = recentPosts.map((doc) => {
        return {
          ...doc,
          mainImageUrl: sanityImageUrl(doc.mainImage)
            .width(1200)
            .height(1200)
            .auto("format")
            .url(),
        }
      })

      if (parsedRecentPosts?.length) {
        setPosts((val) => [...val, ...parsedRecentPosts])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box bg="#fafafa">
      <MetaHeader />
      <NavigationBar />
      <Container maxW={'xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 24, md: 28 }}
          pb={{ base: 0, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize='4xl'
            //  fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Berita {' '}
          </Heading>
        </Stack>
      </Container>
      <div className="respon">
        {/* <SectionBackground
          backgroundImageUrl={`url("/img/y.jpg")`}
          text={"Blog"}
        /> */}
        {/* <div className="post-list-container"> */}
        <div className="container-ku">
          {posts.map((doc) => (
            <Post {...doc} key={doc.slug.current} />
          ))}
        </div>
      </div>

      <Flex justify={"center"} pb={'2em'} >
        <Button onClick={fetchPosts}>
          {isLoading ? "Memproses..." : "Tampilkan lebih"}
        </Button>
      </Flex>
      <Footer />
      {/* </div> */}
    </Box>
  )
}

export async function getStaticProps() {
  const recentPosts = await client.fetch(
    `*[_type == 'post' && "Berita" in categories[]->title ] | order(_publishedAt desc)[0..8]{
          slug,
          title,
          excerpt,
          description,
          mainImage,
          _updatedAt,
        }`
  )

  const parsedRecentPosts = recentPosts.map((doc) => {
    return {
      ...doc,
      mainImageUrl: sanityImageUrl(doc.mainImage)
        .width(1200)
        .height(1200)
        .auto("format")
        .url(),
    }
  })

  return {
    props: {
      recentPosts: parsedRecentPosts,
    },
    revalidate: 3600 * 8,
  }
}
