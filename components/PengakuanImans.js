import React from 'react'
import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    Center,
    Text,
    Image
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import NextLink from 'next/link'
const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

function Feature({ heading, text }) {
    return (
        <GridItem>
            <chakra.h3 fontSize="3xl" fontWeight="600">
                {heading}
            </chakra.h3>
            <chakra.p as='b' fontSize={10}>{text}</chakra.p>
        </GridItem>
    );
}
function KataSambutan() {
    return (
        <Box as={Container} maxW="3xl" mt={14} mb={14} p={50} bg={'whiteAlpha.800'} >
            <Center>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm : 'repeat(1, 1fr)',
                        md: 'repeat( 3, 1fr)',
                    }}
                    gap={{ base: '8', sm: '8', md: '16' }}>
                    <Box style={{
                          boxShadow: '5px 10px 8px #888888'
                    }}
                        p={10} w={300} h={300}>
                        <Feature
                            heading={'1'}
                            text={"Aku percaya Allah yang esa, Pencipta, Penguasa, Pemelihara langit dan bumi, yang menyatakan diri-Nya dalam tiga Pribadi, yaitu Bapa, Anak dan Roh Kudus, yaitu Tuhan Yesus Kristus."}
                        />
                    </Box>
                    <Box  style={{
                          boxShadow: '5px 10px 8px #888888'
                    }} p={10} w={300} h={300} fontSize={11}>
                        <Feature
                            heading={'2'}
                            text={"Aku percaya Yesus Kristus, yang telah turun ke dunia, dikandung dari Roh Kudus, dilahirkan oleh perawan Maria, hidup tanpa dosa, mati disalib untuk menebus dosa manusia, dikuburkan dan bangkit kembali dalam tubuh kemuliaan, naik ke surga dan duduk di sebelah kanan Allah Bapa adalah Juru Selamat, Pelepas dan Penebus; Tabib Surgawi; Pembaptis dengan Roh Kudus dan api; Kepala Gereja, Mempelai Laki-laki yang akan datang, Hakim yang Adil, Tuan diatas segala tuan, Raja segala raja."}
                        />
                    </Box>
                    <Box  style={{
                          boxShadow: '5px 10px 8px #888888'
                    }} p={10} w={300} h={300} fontSize={11}>
                        <Feature
                            heading={'3'}
                            text={"Aku percaya semua manusia berdosa dan telah kehilangan kemuliaan Allah. Satu-satunya cara untuk selamat adalah dengan menerima Yesus Kristus sebagai Tuhan dan Juruselamat."}
                        />
                    </Box>
                    <Box  style={{
                          boxShadow: '5px 10px 8px #888888'
                    }} p={10} w={300} h={300} fontSize={11}>
                        <Feature
                            heading={'4'}
                            text={"Aku percaya Baptisan air secara selam di dalam Nama Bapa, Anak dan Roh Kudus ;Perjamuan Tuhan sebagai peringatan akan kematian Kristus di kayu salib yang harus diterimakan kepada semua orang yang percaya;Gereja yang kudus dan am, persekutuan orang-orang kudus yang ada untuk melaksanakan Amanat Agung Kristus, yaitu memberitakan Injil kepada segala suku bangsa."}
                        />
                    </Box>
                    <Box  style={{
                          boxShadow: '5px 10px 8px #888888'
                    }} p={10} w={300} h={300} fontSize={11}>
                    <Feature
                        heading={'5'}
                        text={"Aku percaya Baptisan air secara selam di dalam Nama Bapa, Anak dan Roh Kudus ;Perjamuan Tuhan sebagai peringatan akan kematian Kristus di kayu salib yang harus diterimakan kepada semua orang yang percaya;Gereja yang kudus dan am, persekutuan orang-orang kudus yang ada untuk melaksanakan Amanat Agung Kristus, yaitu memberitakan Injil kepada segala suku bangsa."}
                        />
                    </Box>
                    <Box  style={{
                          boxShadow: '5px 10px 8px #888888'
                    }} p={10} w={300} h={300} fontSize={11}>
                    <Feature
                        heading={'6'}
                        text={" Aku percaya Baptisan Roh Kudus dan dipenuhi Roh Kudus, jawatan-jawatan pelayanan, Karunia-karunia Roh, serta buah Roh sebagaimana tertulis dalam Alkitab."}
                        />
                    </Box>
                    <Box></Box>
                    <Box  style={{
                          boxShadow: '5px 10px 8px #888888'
                    }} p={10} w={300} h={300} fontSize={11}>
                    <Feature
                        heading={'7'}
                        text={"Aku percaya pada Kedatangan Tuhan Yesus Kristus yang kedua kali, kebangkitan orang-orang percaya dan pengangkatan Gereja untuk menerima hidup yang kekal serta pemerintahan Kristus dalam Kerajaan Seribu Tahun Damai. Penghukuman kekal bagi Iblis dan orang-orang yang namanya tidak tercatat dalam Kitab Kehidupan"}
                        />
                    </Box>
                </Grid>
 
            </Center>
            <Divider mt={12} mb={12} />
        </Box>

    )
}

export default KataSambutan