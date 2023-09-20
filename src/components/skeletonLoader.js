import { getPlaiceholder } from "plaiceholder";

export default async function blur (image) {
  const imagePath = `./public/images/${image}`;
  const { base64 } = await getPlaiceholder(imagePath);
  console.log(base64)
  return base64
}
