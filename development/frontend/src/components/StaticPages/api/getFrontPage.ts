import { fetcher } from "@shared/index";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function getFrontPage() {
   const page = await fetcher({ host: 'API', path: 'PAGE_FRONT' });
   if (!page) return notFound();
   return {
      title: page.title,
      slug: page.slug,
      description: page.description,
      content: page.content,
   }
}