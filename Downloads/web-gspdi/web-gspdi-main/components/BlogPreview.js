import { Box, Flex, Text, Image, Button } from "@chakra-ui/react"
import Link from "next/link"

// const formatter = (text, maxLength) => {
//   if (!text) return
//   if (text.length > maxLength) return text.substring(0, maxLength) + "..."
//   return text
// }

function Post({ doc }) {
  const postWidth = 320
  return (
    <Link href={`/blog/${doc.slug.current}`}>
      <Box
        padding={{ base: 5, sm: 3 }}
        id="post"
        maxWidth={postWidth}
        minWidth={120}
        cursor="pointer"
      >
        <Image
          alt={doc.title}
          src={doc.mainImageUrl}
          style={{
            minWidth: "120px",
            filter: "brightness(1.2)",
            width: "100%",
            height: "auto",
          }}
        />
        <Text
          style={{
            marginTop: 5,
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {doc.title}
        </Text>
        <Text
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {doc.excerpt}
        </Text>
      </Box>
    </Link>
  )
}

export default function BlogPreview({ recentPosts }) {
  return (
    <Flex
      id="BlogPreview"
      background="#fafafa"
      justify="center"
      direction="column"
      align="center"
      paddingTop={10}
      paddingBottom={10}
    >
      <Box maxWidth={1080} textAlign="center">
        <Text fontSize={24} fontWeight="bold">
          Artikel & Berita Terbaru
        </Text>
      </Box>
      <Box maxWidth={1080}>
        <Flex marginTop={10} wrap="wrap" align="center" justify="center">
          {recentPosts.map((doc) => (
            <Post key={doc.slug.current} doc={doc} />
          ))}
        </Flex>
      </Box>
      <Button colorScheme='gray' variant='ghost' href='/blog'>
    Tampilkan Lebih
  </Button>
    </Flex>
  )
}
