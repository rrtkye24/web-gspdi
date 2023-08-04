import {Image} from "@chakra-ui/react"
export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "600px",
        overflow: "hidden",
      }}
    >
      <Image
        src={"/img/church.jpg"}
        alt="hero"
        style={{
          height: "auto",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  )
}
