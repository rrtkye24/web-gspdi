import { Box, Flex, Text, Button, ButtonGroupProps } from "@chakra-ui/react"
import NextLink from "next/link"
export default function Hymne() {
  return (
    <Flex
      id="Hymne"
      justify={"center"}
      direction="column"
      align="center"
      className="singing-bg"
    >
      <Text fontSize={24} as="b" mt={10} color="white">
        Hymne GSPDI
      </Text>

      <Flex padding={10} width={"100%"} justify={"center"}>
        <iframe
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            maxWidth: "680px",
          }}
          width={"680px"}
          src="https://www.youtube.com/embed/Egy-RpDD2uk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Flex>
    </Flex>
  )
}
