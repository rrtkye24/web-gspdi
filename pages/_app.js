// pages/_app.js
import "../styles/globals.css"
import Head from "../components/Heads"
import { ChakraProvider } from "@chakra-ui/react"
import Modal from "react-modal"

Modal.setAppElement("#__next")
function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider>
      <Head />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
