import { Card, CardContent } from "@/components/ui/card";
import { blogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlag": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}


export default async function Home() {
  // datos tipados, con lib/interface.ts
  const data: blogCard[] = await getData();
  
  // urlFor, es de lib/sanity.ts
  // Usamos titleImage de lib/interface.ts
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, index) => (
        <Card key={index}>
          <Image
          width={500}
          height={500}
          src={urlFor(post.titleImage).url()}
          alt="image"
          className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent>
            <h2 className="mt-2 mb-2 font-bold text-lg">{post.title}</h2>
            <h3>{post.smallDescription}</h3>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlag}`}>Leer Más</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
