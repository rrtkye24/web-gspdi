// client.js
import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
  projectId: "sl2lyhwp", //Replace this with your project ID
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  token: 'skHdcqJbdcPHQHz5HTw2DXTkfdGspWioFiIPQra0HoWXaqSYayzRnsDSxpbuMIZ8sxvmJ2qcrk0uilp3zXfBzRVrTYTeNBDFHVn8NOyYYOzwf1lMXuK7kM3POa9XCxaAwhaS3K9OOaLGq6LZpW3Q72dh5Il5uzZewhqX8FVp9RyQ5fBeBhJN',
  apiVersion: "2021-06-07",
})

const sanityImageBuilder = imageUrlBuilder(client)
const sanityImageUrl = (src) => sanityImageBuilder.image(src)

export { client, sanityImageUrl }
