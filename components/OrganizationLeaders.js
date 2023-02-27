import { Flex, Text, Image } from "@chakra-ui/react"

const daniel = "img/daniel.jpg"
const merryam = "img/merryam.jpg"
const giarto = "img/giarto.jpg"

function Profile({ img, name, title }) {
  return (
    <Flex
      // border="1px solid #d8d8d8"
      // borderRadius="5px"
      padding="20px"
      alignItems={"center"}
      direction="column"
    >
      <Image
        src={img}
        alt={name}
        width="200px"
        height="200px"
        maxWidth="200px"
        maxHeight="200px"
        borderRadius="5px"
        marginBottom="15px"
      />
      <Text as="b">{name}</Text>
      <Text>{title}</Text>
    </Flex>
  )
}

export default function OrganizationLeaders() {
  return (
    <Flex justify={"space-around"} direction={{ base: "column", md: "row" }}>
      <Profile
        img={daniel}
        name={"Pdt. Paul Daniel Massie"}
        title={"Ketua Umum"}
      />
      <Profile
        img={merryam}
        name={"Pdt. Merryam Jone Onibala"}
        title={"Bendahara Umum"}
      />
      <Profile
        img={giarto}
        name={"Pdt. Giarto      "}
        title={"Sekretaris Umum"}
      />
    </Flex>
  )
}
