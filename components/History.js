import React from "react"
import { Box, Text, Image, Container, Center, Collapse, Button } from "@chakra-ui/react"
export default function History() {
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)
    return (
        <Box>
            <Container maxWidth={"1000px"} paddingY={"40px"} paddingX={"20px"}>
                <Collapse startingHeight={700} in={show}>

                    <Center>
                        <Text fontSize="24px" as="b">
                            Sejarah GSPDI
                        </Text>
                    </Center>

                    <Text marginTop="20px" as="p">
                        Gereja Sidang Pantekosta Di Indonesia didirikan oleh Pdt. Th. W.
                        Korompis sesuai dengan kutipan dari Daftar Penetapan Menteri
                        Kehakiman RI tanggal 03 Juli 1951 No. J. A. 8/69/15. Yang
                        dikeluarkan berdasarkan surat pemohon tanggal 10 Februari 1951 dari
                        tuan-tuan Th. W. Korompis, Pendeta (Ketua), Ch. S. Schiuws
                        (Bendahara) & Tan Tiauw Tjoen (Panitera).
                    </Text>

                    <Image src={`/img/sejarah.jpeg`} alt="sejarah" marginTop="20px" />

                    <Text marginTop="20px" as="p">
                        Surat Keputusan Convent GSPDI No. 09/CONVENT-GPI/1987, tentang
                        penetapan hari Ulang Tahun GPI (GSPDI), menetapkan ulang tahun Pdt.
                        Prof. Dr. Theodorus William Korompis yang jatuh pada tanggal 20 Juni
                        sebagai Hari Ulang Tahun Gereja Sidang Pantekosta Di Indonesia
                        (GSPDI).
                    </Text>

                    <Text marginTop="10px" as="p">
                        Pada masa kepemimpinannya, Ketua Umum Pdt. Th. W. Korompis pernah
                        dibantu oleh Alm. Pdt. Willem Daniel Massie (Gembala Jemaat GSPDI
                        Cirebon), yang dalam jangka waktu cukup lama menjabat sebagai Wakil
                        Ketua Umum (Ketua I) dari GSPDI; Alm. Pdt. Darius Slat (Gembala
                        Jemaat GSPDI Cilosari – Cikini Jakarta) yang selama bertahun-tahun
                        menjabat sebagai Sekretaris Jenderal GSPDI, sampai saat beliau
                        pulang ke Rumah Bapa pada tahun 1971. Alm. Pdt. Lukas Bakri yang
                        juga merupakan Bendahara Umum;.{" "}
                    </Text>

                    <Text marginTop="10px" as="p">
                        Demikian juga Pdt. F. E. Heydemans (Gembala Jemaat GSPDI Tanjung
                        Priok), Pdt. Jan A. da Costa (Gembala Jemaat GSPDI Makassar) serta
                        Pdt. Drs. Imanuel Nas Ginting. sampai pada tanggal 26 Maret 1991,
                        Tuhan memanggil pulang Bapak Pdt. Prof. Dr. Theodorus William
                        Korompis.
                    </Text>

                    <Center marginTop="30px">
                        <Text fontSize="24px" as="b">
                            Kepemimpinan GSPDI
                        </Text>
                    </Center>

                    <Text marginTop="30px" as="p">
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

                    <Text marginTop="10px" as="p">
                        Musyawarah Nasional V GSPDI yang berlangsung di LPP. Kampus Medan
                        dari 20 – 22 September 2005 menetapkan Pdt. Dr. Drs. Mulyadi
                        Sulaeman, MA. sebagai Ketua Umum GSPDI yang kelima, beliau menjabat
                        sebagai Ketua Umum selama 3 periode sampai tahun 2017. Musyawarah
                        Nasional VIII GSPDI diadakan di Hotel Menara Peninsula – Jakarta
                        pada tanggal 12 – 14 September 2017. Munas VIII memilih dan
                        menetapkan Pdt. Paul Daniel Massie sebagai Ketua Umum masa bakti
                        2017-2022 dan melantik seluruh jajaran Majelis Pusat.
                    </Text>

                    <Text marginTop="10px" as="p">
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
                </Collapse>
                <Center>
                <Button size='sm' onClick={handleToggle} mt='1rem'>
                    Tampilkan {show ? 'Kurang' : 'Lebih'}
                </Button>
                </Center>
            </Container>
        </Box>

    )
}