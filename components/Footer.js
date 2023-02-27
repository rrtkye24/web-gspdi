import {
  Flex,
  Box,
  Text,
  HStack,
  VStack,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  VisuallyHidden,
  useColorModeValue,
  Divider,
  background

} from "@chakra-ui/react"
import NextLink from "next/link"
import { BiMailSend } from "react-icons/bi"
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiLocation,
} from "react-icons/ti"
import { AiOutlineMail } from "react-icons/ai"
import { IoIosCall } from "react-icons/io"
import Image from 'next/image'
import { forwardRef } from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
// Diwrap pake forwardRef karena ada error Warning: Function components cannot be given refs
// https://github.com/vercel/next.js/issues/7915
const backgroundColor = "#000000"
const Logo = (props) => {
  return (
    <HStack >
      <Image
        alt='logo' src='/img/logo.png' width={40} height={40} rounded={'full'}
      />
      <Text as='b' fontSize={{ base: 16, md: 18 }}>Gereja Sidang Pentakosta Di Indonesia</Text>
    </HStack>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("yellow.300", "blackAlpha.200"),
        color: 'blackAlpha.800'
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}
const ButtonForwardRef = forwardRef(function Button(props, ref) {
  return (
    <Flex direction="column" align={"center"}>
      {props.children}
    </Flex>
  )
})

export default function Footer() {
  return (
    <>
      <Box
        className="bendera-bg"
        bg={backgroundColor}
        color={'white'}
        // backdropFilter="blur(20px)"
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr " }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue("blackAlpha.700", "white")} />
              </Box>
              <Box p={1}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.7323765414!2d108.5690503!3d-6.7168857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd08026793270d80c!2sGSPDI%20Filadelfia%20Kenduruan%20Cirebon!5e0!3m2!1sid!2sid!4v1655393356955!5m2!1sid!2sid"
                  width="100%"
                  height="250px"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"https://twitter.com/filakenduruan"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"http://bit.ly/filakenduruan"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Facebook"} href={"https://www.facebook.com/gspdifiladelfiakenduruancirebon"}>
                  <FaFacebook />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"http://instagram.com/gspdifiladelfia"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Whatsapp"} href={"https://api.whatsapp.com/send?phone=6281802367177"}>
                  <FaWhatsapp />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"} m={5}>
              <ListHeader>Kantor</ListHeader>
              <Box>
                <Text color="gray.500" fontSize={{ base: 12, md: 14, lg: 18 }}>
                  Jl. Kenduruan No.92, Panjunan
                  Kec. Lemahwungkuk, Kota Cirebon 45112
                  Jawa Barat
                </Text>
              </Box>
              <Box pt={5}>
                <HStack>
                  <IoIosCall size={24} />
                  <Text fontSize={{ base: 12, md: 14, lg: 18 }}>Telepon:</Text>
                  <Text color={'gray.500'}><Link href="tel:0231233565">(0231) 233565</Link></Text>
                </HStack>
                <HStack pt={2}>
                  <AiOutlineMail size='24' />
                  <Text fontSize={{ base: 12, md: 14, lg: 18 }}>
                    Email:
                  </Text>
                  <Text color={'gray.500'} fontSize={{ base: 12, md: 14, lg: 18 }}><Link href="mailto:majelispusatgspdi">majelispusatgspdi@gmail.com</Link></Text>
                </HStack>
                <Box pt="6">
                  <ListHeader>Menu</ListHeader>
                  <Link color="gray.500" href={"https://keuangan-gspdi.vercel.app"}>- Login</Link>
                </Box>
              </Box>
              {/* <VStack pt={4} spacing={4}
                align='stretch'>
                <ListHeader>Rekening</ListHeader>
                <Box>
                  <Image
                    alt='qris' src='/img/qris.jpg' width={150} height={150} rounded={'full'}
                  />
                </Box>
              </VStack> */}
            </Stack>
            <Stack align={"flex-start"} m={5}>
              <ListHeader>Rekening</ListHeader>
              <Image
                alt='qris' src='/img/qris.jpg' width={200} height={200} rounded={'full'}
              />
            </Stack>

          </SimpleGrid>
        </Container>
      </Box>
      <Box
        bg={'#ffffff'}
        color='black'
        backdropFilter="blur(20px)"
      >
        <Container
          as={Stack}
          maxW={'5xl'}
          // spacing={2}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Divider color={'gray'}></Divider>
          <Text fontSize={'sm'}>© 2022 GSPDI FILADELFIA.</Text>
        </Container>
      </Box>
    </>
  )
}