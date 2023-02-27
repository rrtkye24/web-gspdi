import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton,
  Stack,
  Image,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { FaFacebookSquare } from "react-icons/fa"

/* 
KataSambutanFloat = Hero + KataSambutan
*/

function ProfilKetuaUmum() {
  return (
    <Box
      id="profil-ketua-umum"
      flex={1}
      //   w={{ base: "100%", md: "50%" }}
      //   h={{ base: "100%", md: "50%" }}
      align="center"
    >
      <Image
        borderRadius="full"
        boxSize={{ base: "80px", md: "100px" }}
        src="img/ketua-umum.jpeg"
        alt="ketua-umum"
        mb={8}
      />
      <Text fontSize="20" color="black" fontWeight="bold">
        Pdt. Paul Daniel Massie
      </Text>
      <Text fontSize="18" color="black" mb={5}>
        Ketua Majelis Pusat
      </Text>
      <NextLink href="https://www.facebook.com/gspdifiladelfiakenduruancirebon/">
        <IconButton
          colorScheme="blue"
          aria-label="facebook"
          icon={<FaFacebookSquare />}
        />
      </NextLink>
    </Box>
  )
}

function Sambutan() {
  return (
    <Box
      id="sambutan"
      //   w={{ base: "100%", md: "50%" }}
      //   h={{ base: "100%", md: "50%" }}
      flex={1}
      p={8}
      pt={2}
    >
      <Stack spacing={4}>
        <Text as="b" fontSize="20">{`Kata Sambutan`}</Text>
        <Text as="i" fontSize="18px">
          {`"Karena itu jagalah dirimu dan jagalah seluruh kawanan, karena
              kamulah yang ditetapkan Roh Kudus menjadi penilik untuk
              menggembalakan jemaat Allah yang diperoleh-Nya dengan darah Anak-Nya
              sendiri."`}
        </Text>
        <Text fontSize="18px" mt={10} float="right" fontWeight="bold">
          {`Kisah Para Rasul 20:28`}
        </Text>
      </Stack>
    </Box>
  )
}

export default function KataSambutanFloat() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "600px",
        maxHeight: "700px",
        // height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/img/church.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "60px",
      }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        // padding={{ base: "12px", md: "36px", sm: "24px" }}
        padding={{ base: "1rem 0rem", md: 10, sm: 3 }}
        margin={{ base: 3, md: 12, sm: 6 }}
        maxW={1080}
        // bg="white"
        style={{
          background: "#ffffffd4",
          backdropFilter: "blur(10px) brightness(1.25)",
          //   padding: "36px",
          borderRadius: "5px",
        }}
      >
        <ProfilKetuaUmum />
        <Sambutan />
      </Flex>
    </div>
  )
}
