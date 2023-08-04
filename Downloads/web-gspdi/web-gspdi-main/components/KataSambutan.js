import { Box, Flex, Text, Stack, Image } from "@chakra-ui/react"
import { SocialIcon } from "react-social-icons"
// import NextLink from "next/link"

function ProfilKetuaUmum() {
  return (
    <Box
      id="profil-ketua-umum"
      width={{ base: "100%", md: "50%" }}
      align="center"
      marginBottom={{ base: 8, md: 0 }}
    >
      <Image
        borderRadius="full"
        boxSize={"80px"}
        marginBottom={4}
        src="img/ketua-umum.png"
        alt="ketua-umum"
      />
      <Text fontSize="20" color="black" fontWeight="bold">
        Pdt. Paul Daniel Massie
      </Text>
      <Text color="black" mb={5}>
        Ketua Umum GSPDI
      </Text>
      <Flex justify={"center"}>
        <SocialIcon
          network="youtube"
          url="https://www.youtube.com/gspdifiladelfiakenduruancirebon/"
          style={{ height: 30, width: 30, margin: 5, cursor: "pointer" }}
        />

        <SocialIcon
          network="facebook"
          url="https://www.facebook.com/gspdifiladelfiakenduruancirebon/"
          style={{ height: 30, width: 30, margin: 5, cursor: "pointer" }}
        />

        <SocialIcon
          network="instagram"
          url="https://www.instagram.com/gspdifiladelfiakenduruancirebon/"
          style={{ height: 30, width: 30, margin: 5, cursor: "pointer" }}
        />
      </Flex>
    </Box>
  )
}

function Sambutan() {
  return (
    <Box id="sambutan" width={{ base: "100%", md: "50%" }} padding={8}>
      <Stack spacing={4}>
        <Text as="b" fontSize="20" fontWeight="bold">{`Kami Siap untuk GSPDI`}</Text>
        <Text as="i">
          {`"Kasih persaudaraan di dalam spirit Pentakosta"`} <Text fontSize="15px"  fontWeight="bold">
          {`~ Filadelfia`}
        </Text>
        </Text>
      </Stack>
    </Box>
  )
}

export default function KataSambutan() {
  return (
    <Flex
      bg="white"
      justify={"center"}
      id="katasambutan"
      marginTop={"50px"}
      marginBottom={"50px"}
    >
      <Flex direction={{ base: "column", md: "row" }} maxW={1080}>
        <ProfilKetuaUmum />
        <Sambutan />
      </Flex>
    </Flex>
  )
}
