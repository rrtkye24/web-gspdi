import { Image, VStack } from "@chakra-ui/react"
// import { useEffect } from "react"
import Logo from "../public/img/logo.png"
import {
  Text,
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

const backgroundColor = "#020f1bdb"

function NavButton({ href, text }) {
  return (
    <NextLink href={href}>
      <Button
        as="a"
        variant="ghost"
        aria-label={text}
        _hover={{ bg: "whiteAlpha.400" }}
        _focus={{ boxShadow: "outline" }}
        marginY={5}
      >
        {text}
      </Button>
    </NextLink>
  )
}

function NavButtonMobile({ href, text }) {
  return (
    <Center height="50px">
      <NextLink href={href} passHref>
        <Button
          as="a"
          fontSize={16}
          className='hover-underline-animation'
          color='white' variant='link'
        >
          {text}
        </Button>
      </NextLink>
    </Center>
  )
}

function LogoGSPDI({ isOpen }) {
  return (
    <NextLink href={"/"} passHref>
      <HStack id="menu-left">
        <Image
          cursor={'pointer'}
          src={Logo.src}
          height={isOpen ? "40px" : "40px"}
          style={{ transition: "all .3s linear" }}
          alt="logo"
        />
        <Text textAlign="start" fontSize="xl">
          <Text as="b">{"GSPDI "}</Text>
          Filadelfia
        </Text>
      </HStack>
    </NextLink>
  )
}

export default function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // useEffect(() => {
  //   console.log("nav render")
  // }, [])

  return (
    <Flex
      id="NavigationBar"
      size={"md"}
      as="nav"
      w="100%"
      px="5"
      py="1"
      align="center"
      justify="space-between"
      position="fixed"
      bg={backgroundColor}
      backdropFilter="blur(20px)"
      // borderBottom={"1px solid #f8f8f8"}
      color="white"
      height={"75px"}
      zIndex={99}
    >
      <LogoGSPDI isOpen={isOpen} />

      <Flex
        alignItems={"center"}
        zIndex={9999}
        justifyContent={"space-between"}
        display={{ base: "none", md: "flex" }}
        size={"sm"}
        mr={4}
        id="menu-right"
        cursor={'pointer'}
      >
        <NavButton href="/" text="Beranda" />
        <NavButton href="/about" text="Tentang Kami" />
        <NavButton href="/blog" text="Artikel" />
        <NavButton href="/news" text="Berita" />
        {/* <NavButton href="/organization" text="Organisasi" /> */}
        <NavButton href="/contact" text="Hubungi Kami" />
      </Flex>

      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
        bg={backgroundColor}
        backdropFilter="blur(20px)"
        outline="#fff"
        id="mobile-right-menu"
      />
      {isOpen ? (
        <Box
          display={{ md: "none" }}
          width={"full"}
          position={"absolute"}
          top={"74px"}
          left={0}
          background={backgroundColor}
          backdropFilter="blur(20px)"
        >
          <VStack paddingY={5}  p={2}>
            <NavButtonMobile href="/" text="Beranda" />
            <NavButtonMobile href="/about" text="Tentang Kami" />
            {/* <NavButtonMobile href="/organization" text="Organisasi" /> */}
            <NavButtonMobile href="/blog" text="Artikel" />
            <NavButtonMobile href="/news" text="Berita" />
            <NavButtonMobile href="/contact" text="Hubungi Kami" />
          </VStack>
        </Box>
      ) : null}
    </Flex>
  )
}
