import { Box, Text, Image } from "@chakra-ui/react"
import { client, sanityImageUrl } from "../../sanity"
import { PortableText } from "@portabletext/react"
// Local
import NavigationBar from "../../components/NavigationBar"

/* HAPUS NOTE INI:
    1. Ngapain parsing mainImagenya di useEffect? Langsung parsing imagenya di getStaticProps aja, 
         biar pas sampe component udah beres ngga perlu pake useState re-render" lagi. 

    2. Jangan pake sanityBlockContent. Kan saya udah bilang itu packagenya deprecated. Pake yang @portabletext/react.
        Tapi pake package ini kita harus bikin image component sendiri. Ini saya contohin. 

    3. Pasang NextSeo disini. Saya sudah contohin di index.html (homepage)

    4. Ini bagian blog nya blm beres. Pasang title, author, category(kalo ada), trs mungkin tambahin social share icons. 

    5. Coba test tambahin post yang ada image di bodynya. Pastiin PortableImage componentnya berjalan dgn baik. Kalo ngga, benerin. 
*/

const PortableImage = ({ value }) => {
  return (
    <Image
      src={sanityImageUrl(value).width(800).fit("max").auto("format").url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        width: "100%",
        marginBottom: 20,
      }}
    />
  )
}

export default function BlogPost(props) {
  const { title, body, imageUrl,_updatedAt ,} = props

  return (
    <Box id="BlogPost" bg="#fafafa" >
      <NavigationBar />
      <Box pt={75}>
      <Image src={imageUrl} alt="main-image" />
      </Box>
      <Box className="post-container" >
        <Box className="post-content">
       
     
        <Text fontSize={'4xl'} mb={5} mt={5} textAlign='center' fontWeight='bold'> {title} </Text>
        <Text className="published-at" fontSize={18} mt={5} mb={2} color={"brown"} textAlign='start' fontWeight='light'>#
        Publised at {new Date(_updatedAt).toDateString().slice(4)}
          </Text>
          <PortableText
            // id="PortableText"
            value={body}
            components={{
              types: {
                image: PortableImage,
              },
            }}
            projectId={client.config().projectId}
            dataset={client.config().dataset}
          />
          
       
        </Box>
        
      </Box>
    </Box>
  )
}

export const getServerSideProps = async (context) => {
  const slug = context.query.post

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )

  if (post?.mainImage) {
    post.mainImageUrl = sanityImageUrl(post.mainImage)
      .width(3000)
      .height(1080)
      .auto("format")
      .url()
  }

  if (!post) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
        imageUrl: post.mainImageUrl,
        _updatedAt: post._updatedAt
      },
    }
  }
}
