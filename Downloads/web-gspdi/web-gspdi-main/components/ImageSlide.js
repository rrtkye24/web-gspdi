import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react"
import Image from "next/image"

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"95vh"}
      backgroundImage={'url("/img/event.jpg")'}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        animation
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack>
          <Center>
            <Image alt='' src={'/img/logo.png'} width='100' height={100} />
          </Center>
        </Stack>
        <Stack
          maxW={"2xl"}
          align={"center"}
          spacing={1}
        //    position={'fixed'} zIndex={1}
        >
          <Center>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              align={"center"}
            >
              Gereja Sidang Pantekosta Di Indonesia
            </Text>
          </Center>
          <Stack w={{ base: "200px", md: "400px" }}>
            <Image
              alt=""
              src={"/img/filadelfia.png"}
              width="300"
              height="150"
            />
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
