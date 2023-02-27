import { Box, Text, Stack, Heading, Container, Center, Link, VStack} from "@chakra-ui/react"
import { NextSeo } from "next-seo"

// Local
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
import PengakuanIman from "../components/PengakuanIman"
import History from "../components/History"
import OrganizationStructure from "../components/OrganizationStructure"

function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "Tentang Kami - GSPDI Church Indonesia",
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

export default function About() {
  return (
    <Box bg="#fafafa">
      <MetaHeader />
      <NavigationBar />
      {/* <SectionBackground
        backgroundImageUrl={'url("/img/g3.jpg")'}
        text="Tentang Kita"
      /> */}
     <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 24, md: 28}}>
        <Heading
          fontWeight={600}
          fontSize='4xl'
          lineHeight={'110%'}>
          Tentang {' '}
          <Text as={'span'} color={'yellow.400'}>
            Kami
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        Gereja Sidang Pantekosta Di Indonesia adalah gereja yang hadir di seluruh Indonesia. Menggunakan Strategi SMART(Specific, Measurable, Achivable, Realistik, Timely) melalui 4 bidang 
          penatalayanan (Organisasi, Pengembalaan, Pendidikan dan Misi, Diakonia, dan Teknologi).
        </Text>
      </Stack>
    </Container>
      <PengakuanIman/>
      <History/>
      <Container
        maxWidth='full' 
        className="singing-bg"
        color={'white'}
        paddingTop={{ base: "80px", md: "120px" }}
        paddingBottom={"40px"}
      >
        <OrganizationStructure/>
      </Container>
      <Container py={'5em'}>
        <Center>
        <VStack p={10}>
        <Text as="b" fontSize={'2xl'}>Tata Gereja</Text>
        <Link target="_blank" href="assets/tata-gereja.pdf">Lihat PDF</Link>
        </VStack>
        <VStack p={10}>
        <Text as="b" fontSize={'2xl'}>Akta Notaris</Text>
        <Link target="_blank" href="assets/akta-notaris.pdf">Lihat PDF</Link>
        </VStack>
        </Center>
      </Container>
      <Footer />
    </Box>
  )
}
