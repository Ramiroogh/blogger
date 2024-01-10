import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string){
    const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]`;
    const data = await client.fetch(query);
    return data;
}

export default async function BlogArticle({params}: { params: {slug: string} }) {
    const data: fullBlog = await getData(params.slug);
    return(
        <div className="mt-8 flex flex-col justify-center items-center">
            <h1>
                <span className="block text-base text-primary text-center font-semibold tracking-wide uppercase">RamaDEV - Blog</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image
                src={urlFor(data.titleImage).url()}
                alt="image"
                width={500} height={500}
                priority
                className="rounded-lg mt-5 border"
            />

            <div className='mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
                <PortableText className="" value={data.content}/>
            </div>
        </div>
    )
}