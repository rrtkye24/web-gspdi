import {
  Box,
  Text,
  Stack,
  Center,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Container,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
import { BsPerson } from 'react-icons/bs';
import { useRouter } from 'next/router'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
function MetaHeader() {
  const seoConfig = {
    url: "https://www.gspdi.com",
    title: "Hubungi Kami - GSPDI Filadelfia Indonesia",
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

function Form({ _id }) {
  const router = useRouter()
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState();
  const [hasSubmitted, setHasSubmitted] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = async data => {
    setIsSubmitting(true)
    setFormData(data)
    try {
      await fetch('/api/createMessage', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json'
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }
  return (
    <SimpleGrid mb={10} columns={{ base: 1, md: 2, lg: 2 }}  >
      <Box w={{ base: 300, md: 400 }} h={{ base: 250 }} mb={140} justifyContent={'center'} >
        <Stack
          mt={{ base: 50, md: 160 }}
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={10}
        // spacing={8}>
        >
          
          <HStack >
            <MdLocationOn size={24} />
            <VStack align={'left'}>
              <Text as='b'>Alamat </Text>
              <Text fontSize={{ base: 12, md: 16 }}>Jl. Kenduruan No.92, Panjunan <br />Kec. Lemahwungkuk, <br /> Kota Cirebon 45112 Jawa Barat</Text>
            </VStack>
          </HStack>
          <HStack >
            <MdOutlineEmail size={24} />
            <VStack align={'left'}>
              <Text as='b'>Email </Text>
              <Text fontSize={{ base: 12, md: 16 }} >majelispusatgspdi@gmail.com</Text>
            </VStack>
          </HStack>
          <HStack >
            <MdPhone size={24} />
            <VStack align={'left'}>
              <Text as='b'>Telepon </Text>
              <Text fontSize={{ base: 12, md: 16 }}>(0231) 233565</Text>
            </VStack>
          </HStack>
        </Stack>
      </Box>
      <Box mt={{ base: 0, md: 40 }} borderRadius="lg" boxShadow={'2xl'}
        bg={useColorModeValue('white', 'gray.700')} w={{ base: 290, md: 400 }} h={{ base: 380, md: 315 }} >
        <Box m={5} color="#0B0E3F" >
        {hasSubmitted ?
        <Box>
         <Alert status='success'><AlertIcon />Pesanmu sudah terkirim dan akan dibalas secepatnya</Alert>
         <Button colorScheme='yellow' variant='solid' onClick={() => router.push('/')}>
         Back
         </Button>
       </Box>
        : 
          <VStack spacing={5}>
            <form onSubmit={handleSubmit(onSubmit)} disabled>
              <Stack direction={{ base: 'column', md: 'row' }} align='stretch'>
                <input {...register} type="hidden" name="_id" value={_id} />
                <FormControl id="name">
                  <FormLabel>Nama Lengkap</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                    ><BsPerson color="gray.800"></BsPerson></InputLeftElement>
                    <Input {...register('name', { required: true })} placeholder="Nama" name="name" type="text" size="md" />\
                    {errors?.name?.type === 'required' && <p>"Mohon isi kotak Nama"</p>}
                  </InputGroup>
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                    ><MdEmail></MdEmail></InputLeftElement>
                    <Input {...register("email", {
                      required: "Required",
                    })} type="email" size="md" placeholder="nama@email.com" />
                    {errors?.email?.type === 'required' && <p>"Mohon isi kotak Email"</p>}
                  </InputGroup>
                </FormControl>
              </Stack>
              <FormControl id="message">
                <FormLabel>Pesan</FormLabel>
                <Textarea
                  {...register("message", {
                    required: "message",
                  })}
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: 'gray.300',
                  }}
                  placeholder="Masukkan Pesan ..."
                />
                {errors?.message?.type === 'required' && <p>"Mohon isi pesan untuk kami"</p>}
              </FormControl>
              <FormControl id="name" float="right" pt={'10px'}>
                {
                  isSubmitting ?
                    <Spinner /> :
                    <Button type="submit" variant="solid" bg="yellow.400" color="white" _hover={{}}>Kirim Pesan</Button>
                }
              </FormControl>
            </form>
          </VStack>
          }
        </Box>
      </Box>
    </SimpleGrid>
  )
}
export default function Contact() {
  return (
    <Box className="singing-bg">
      <MetaHeader />
      <NavigationBar />
      <Container pt={10} maxW={'100ch'} >
        <Form />
      </Container>
      <Footer />
    </Box>
  )
}
