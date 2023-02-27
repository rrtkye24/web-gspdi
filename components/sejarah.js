import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  
   function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={10} flex={1} align={'center'} justify={'center'} id='sejarah' pt={70}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading as="h2" fontSize="25px" mt="2%" textColor="black">
         Sejarah GSPDI
        </Heading>
            <Text mt={4} text-align="justify" letterSpacing={1} fontSize={15}>
            Gereja Sidang Pantekosta Di Indonesia didirikan oleh Pdt. Th. W. Korompis sesuai dengan kutipan dari Daftar Penetapan Menteri Kehakiman RI tanggal 03 Juli 1951 No. J. A. 8/69/15. Yang dikeluarkan berdasarkan surat pemohon tanggal 10 Februari 1951 dari tuan-tuan Th. W. Korompis, Pendeta (Ketua), Ch. S. Schiuws (Bendahara) & Tan Tiauw Tjoen (Panitera).
Surat Keputusan Convent GSPDI No. 09/CONVENT-GPI/1987, tentang penetapan hari Ulang Tahun GPI (GSPDI), menetapkan ulang tahun Pdt. Prof. Dr. Theodorus William Korompis yang jatuh pada tanggal 20 Juni sebagai Hari Ulang Tahun Gereja Sidang Pantekosta Di Indonesia (GSPDI).

            </Text>

            <Text mt={4} text-align="justify" letterSpacing={1} fontSize={15}>
            Pada masa kepemimpinannya, Ketua Umum Pdt. Th. W. Korompis pernah dibantu oleh Alm. Pdt. Willem Daniel Massie (Gembala Jemaat GSPDI Cirebon), yang dalam jangka waktu cukup lama menjabat sebagai Wakil Ketua Umum (Ketua I) dari GSPDI; Alm. Pdt. Darius Slat (Gembala Jemaat GSPDI Cilosari – Cikini Jakarta) yang selama bertahun-tahun menjabat sebagai Sekretaris Jenderal GSPDI, sampai saat beliau pulang ke Rumah Bapa pada tahun 1971. Alm. Pdt. Lukas Bakri yang juga merupakan Bendahara Umum;. Demikian juga Pdt. F. E. Heydemans (Gembala Jemaat GSPDI Tanjung Priok), Pdt. Jan A. da Costa (Gembala Jemaat GSPDI Makassar) serta Pdt. Drs. Imanuel Nas Ginting. sampai pada tanggal 26 Maret 1991, Tuhan memanggil pulang Bapak Pdt. Prof. Dr. Theodorus William Korompis.
            </Text>
            
          </Stack>
        </Flex>
        <Flex flex={1}  p={10}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'img/Sejarah.jpeg'}
          />
        </Flex>
      </Stack>
    );
  }
  export default SplitScreen