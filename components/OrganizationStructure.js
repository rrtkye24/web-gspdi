import { useState } from "react"

import {
  Text,
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  TableContainer,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Image,
  useBreakpoint,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react"
import Modal from "react-modal"
import organisasiJSON from "../organisasi.json"
import { SocialIcon } from "react-social-icons"
import Link from "next/link"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
    padding: "40px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#e9e9e9b0",
  },
}
function Profile(url,) {
  return(
    <Box
    width="25px"
    height="25px"
    borderRadius={"full"}
    background={url_foto}
    marginRight="10px"
  />
  )
}
function Majelis({ majelis, member, openModal, closeModal }) {
  
  const MajelisTr = ({  nama, jabatan, url_foto, onClick }) => {
    return (
      <Tr onClick={onClick} _hover={{ background: "rgba(17, 22, 55, 0.8)" }} cursor="pointer">
        {/* <Td style={{ width: "5%", paddingTop: "10px", paddingBottom: "10px" }}>
          <Flex alignItems="center">{no}</Flex>
        </Td> */}
        <Td style={{ width: "45%", paddingTop: "15px", paddingBottom: "15px" }}>
          <Flex alignItems="center">
            {/* <Profile url_foto={url_foto}/> */}
            {nama}
          </Flex>
        </Td>
        <Td style={{ width: "50%", paddingTop: "15px", paddingBottom: "15px" }}>
          <Flex alignItems="center">
            <Box width="0px" height="25px" />
            {jabatan}
          </Flex>
        </Td>
      </Tr>
    )
  }

  return (
    <AccordionItem>
      <h2>
        <AccordionButton padding={"15px"}>
          <Box flex="1" textAlign="left" style={{ fontWeight: "bold" }}>
            Majelis {majelis}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <TableContainer marginLeft={"10px"} fontSize="14px">
          <Table variant="simple">
            <Thead>
              <Tr>
                {/* <Th>No</Th> */}
                <Th color={'whiteAlpha'}>Nama</Th>
                <Th color={'whiteAlpha'}>Jabatan</Th>
              </Tr>
            </Thead>
            <Tbody>
              {member.map((doc, index) => {
                return (
                  <MajelisTr
                    no={doc.NO}
                    nama={doc.NAMA}
                    jabatan={doc.JABATAN}
                    url_foto={doc.URL_FOTO}
                    key={doc.NO}
                    onClick={() =>
                      openModal({
                        majelis: majelis,
                        no: doc.NO,
                        no_ktj: doc.NO_KTJ,
                        nama: doc.NAMA,
                        jabatan: doc.JABATAN,
                        status: doc.STATUS,
                        nama_gereja: doc.NAMA_GEREJA,
                        alamat_gereja: doc.ALAMAT_GEREJA,
                        url_foto: doc.URL_FOTO,
                        memberIndex: index,
                      })
                    }
                  />
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default function OrganizationStructure() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  const openModal = (data) => {
    setModalData(data)
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
    setModalData(null)
  }

  const Title = ({ text }) => {
    return (
      <Text fontSize="12px" fontWeight="semibold">
        {text}
      </Text>
    )
  }
  const Value = ({ text, textProps }) => {
    return (
        <Text fontSize="14px" marginBottom="10px" {...textProps}>
          {text}
        </Text>
    )
  }

  return (
      <Box pr={useBreakpointValue({ lg: '12em', md: '2em' })} 
      pl={useBreakpointValue({ lg: '12em', md: '2em' })} 
      >
        <Center pb={'2em'}>
        <Text as='b' fontSize='2xl' >Struktur GSPDI</Text>
        </Center>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Member Data"
        // className={"react-modal-overide"}
        >
          <Flex className="react-modal-container">
            <Box>
              <img
                width={220}
                height={220}
                src={modalData?.url_foto}
                className="member-photo"
              />
              <Flex justify={"center"} paddingTop="20px">
                <SocialIcon
                  network="youtube"
                  url="https://www.youtube.com/gspdifiladelfiakenduruancirebon/"
                  style={{ height: 25, width: 25, margin: 5, cursor: "pointer" }}
                />

                <SocialIcon
                  network="facebook"
                  url="https://www.facebook.com/gspdifiladelfiakenduruancirebon/"
                  style={{ height: 25, width: 25, margin: 5, cursor: "pointer" }}
                />

                <SocialIcon
                  network="instagram"
                  url="https://www.instagram.com/gspdifiladelfiakenduruancirebon/"
                  style={{ height: 25, width: 25, margin: 5, cursor: "pointer" }}
                />
              </Flex>
            </Box>
            <Box width={300} paddingX="20px">
              <Title text="Nomor Kartu Tanda Jabatan" />
              <Value text={modalData?.no_ktj} />

              <Title text="Nama" />
              <Value text={modalData?.nama} />

              <Title text="Jabatan" />
              <Value text={modalData?.jabatan} />

              <Title text="Status" />
              <Value text={modalData?.status} />

              <Title text="Nama Gereja" />
              <Value text={modalData?.nama_gereja} />

              <Title text="Alamat Gereja" />
              <Value
                text={modalData?.alamat_gereja}
              />
              {modalData?.majelis === "Pusat" && (
                <>
                  <Title text="Program Kerja" />

                  <Link target="_blank" href="https://drive.google.com/file/d/14AzV7dvAuccp9BjDabD-tjfx7HLJj2w9/view?usp=sharing">
                    <Value
                      text="Download PDF"
                      textProps={{
                        style: {
                          color: "blue",
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                      }}
                    />
                  </Link>
                </>
              )}
            </Box>
          </Flex>
        </Modal>
        <Accordion allowMultiple>
          {organisasiJSON.map((doc) => (
            <Majelis
              majelis={doc.majelisDisplay}
              member={doc.member}
              key={doc.majelis}
              openModal={openModal}
              closeModal={closeModal}
            />
          ))}
        </Accordion>
      </Box>
  )
}
