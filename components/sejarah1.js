import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

function Sejarah() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} p={10}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"img/Picture2.jpg"}
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading as="h2" fontSize="25px" mt="2%" textColor="black">
            Kepemimpinan GSPDI
          </Heading>
          <Text mt={4} text-align="justify" letterSpacing={1} fontSize={15}>
            Kepemimpinan GSPDI beralih kepada Pdt W. D. Massie, namun
            kepemimpinan dari Pdt. W. D. Massie tidak berlangsung lama. Pada
            tanggal 07 Mei 1992, Tuhan memanggil beliau. Beliau digantikan
            sementara oleh Pdt. Constance Martha Korompis Karwur sampai Mukernas
            tanggal 20 – 22 Juni 1994 di Tenga - Sulawesi Utara, di Mukernas ini
            terpilihlah Pdt. Ir. Paulus Lukita menjadi Ketua Umum GSPDI
            menggantikan alm. Pdt. W. D. Massie. Pada tanggal 20 Juli 1997,
            Tuhan memanggil Ketua Umum GSPDI, Bapak Pdt. Ir. Paulus Lukita.
            Jabatan Ketua Umum Pengganti Antar Waktu dijabat oleh Pdt. Benjamin
            Waturangi, M.Th., dan didefinitifkan di Munas IV tahun 2001, sampai
            pada Munas V tahun 2005.
          </Text>

          <Text mt={4} text-align="justify" letterSpacing={1} fontSize={15}>
            Musyawarah Nasional V GSPDI yang berlangsung di LPP. Kampus Medan
            dari 20 – 22 September 2005 menetapkan Pdt. Dr. Drs. Mulyadi
            Sulaeman, MA. sebagai Ketua Umum GSPDI yang kelima, beliau menjabat
            sebagai Ketua Umum selama 3 periode sampai tahun 2017. Musyawarah
            Nasional VIII GSPDI diadakan di Hotel Menara Peninsula – Jakarta
            pada tanggal 12 – 14 September 2017. Munas VIII memilih dan
            menetapkan Pdt. Paul Daniel Massie sebagai Ketua Umum masa bakti
            2017-2022 dan melantik seluruh jajaran Majelis Pusat.
          </Text>
          <Text
            mt={4}
            mb={10}
            text-align="justify"
            letterSpacing={1}
            fontSize={15}
          >
            Musyawarah Nasional IX GSPDI diadakan di Grand Hyatt Hotel – Nusa
            Dua Bali pada tanggal 22 – 24 Februari 2022. Munas IX Kembali
            memilih dan menetapkan Pdt. Paul Daniel Massie sebagai Ketua Umum
            masa bakti 2022-2027. Di masa bakti ini, Pdt. Paul Massie akan lebih
            menekankan pelayanan Pendidikan dan Misi, agar pekerjaan Tuhan di
            GSPDI dapat semakin bertumbuh dalam segala hal ke arah Kristus
            (Efesus 4 : 15), ayat yang telah menjadi visi GSPDI sejak
            kepemimpinan Pdt. Mulyadi Sulaeman. Kita berdoa agar Tuhan semakin
            memakai GSPDI sebagai wadah pekerjaan-Nya yang mulia, agar lebih
            banyak lagi jiwa yang dapat dimenangkan untuk kemuliaan nama Tuhan
            kita Yesus Kristus.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  )
}
export default Sejarah
