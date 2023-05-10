import { fetcher } from "@shared/api/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function getFrontPage() {
   const page = await fetcher({ host: 'api', path: 'pageFront' });
   if (!page) return notFound();
   return {
      title: page.title,
      slug: page.slug,
      description: page.description,
      content: page.content,
   }
}