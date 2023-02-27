import {
    Box, Text, Image, Container, Center, Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure
} from "@chakra-ui/react"
import { useRef } from 'react';
export default function VisiMission() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    return (
        <Box
            color="#fff"
            className="singing-bg"
            paddingTop={{ base: "50px", md: "100px" }}
        >
            <Container maxWidth={"500px"} paddingY={"20px"} textAlign="center">
                <Text fontSize="24px" as="b">
                    Visi
                </Text>
                <Text marginTop="10px">
                    Bertumbuh dalam segala hal ke arah Kristus, Efesus 4:15
                </Text>
            </Container>
            <Container
                maxWidth={"500px"}
                paddingY={"50px"}
                paddingTop={"25px"}
                textAlign="center"
            >
                <Text fontSize="24px" as="b">
                    Misi
                </Text>
                <Text marginTop="10px">
                    Menjadi dan menjadikan murid Kristus, Matius 28:19-20
                </Text>
                <Button onClick={onOpen} colorScheme='whiteAlpha' mt="10px" variant='link'>
                    Selengkapnya
                </Button>
            </Container>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Misi Kami
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <Text fontSize="15px" fontWeight="bold">
                                {`Misi 1`}
                            </Text>
                            <Text as="i">
                                {`Membangun GSPDI yang berkarakter, berintegritas dan bersatu untuk menjaga GSPDI dari rongrongan perpecahan.`}
                            </Text>
                            <Text fontSize="15px" fontWeight="bold">
                                {`Misi 2`}
                            </Text>
                            <Text as="i">
                                {`Mempercepat program prioritas gerakan pertumbuhan dan pengembangan gereja. `}
                            </Text>
                            <Text fontSize="15px" fontWeight="bold">
                                {`Misi 3`}
                            </Text>
                            <Text as="i">
                                {`Memperkuat kapasitas keuangan MDF dalam membangun GSPDI di daerah baik pengembangan gereja dan kesejahteraan hamba-hamba Tuhan."`}
                            </Text>
                            <Text fontSize="15px" fontWeight="bold">
                                {`Misi 4`}
                            </Text>
                            <Text as="i">
                                {`Menjadikan kehidupan hamba-hamba Tuhan GSPDI, lebih mandiri,  maju, dan no gaptek.`}
                            </Text>
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Kembali
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    )
}