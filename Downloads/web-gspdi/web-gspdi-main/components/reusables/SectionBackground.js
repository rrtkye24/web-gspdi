import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react"

export default function SectionBackground({ backgroundImageUrl, text }) {
  return (
    <Flex
      pt={20}
      w={"full"}
      h={"60vh"}
      backgroundImage={backgroundImageUrl}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.500, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={1}>
          <Center>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
              align={"center"}
            >
              {text}
            </Text>
          </Center>
        </Stack>
      </VStack>
    </Flex>
  )
}
