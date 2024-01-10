import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 'zfx2jy93',
    useCdn: false,
})

// Obtener la URL de las imagenes de los Posts
const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}