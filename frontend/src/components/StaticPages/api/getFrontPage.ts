import { fetcher } from "@shared/api/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentType } from "@components/Content/model/type";


interface frontPagePromise extends Metadata, contentType {
   slug?: string;
   image?: {};
   content?: [contentType];
};

export async function getFrontPage(): Promise<frontPagePromise> {
   const page = await fetcher({ host: 'api', path: 'pageFront' });
   if (!page) return notFound();
   return {
      title: page.data.attributes.title,
      slug: page.data.attributes.slug,
      description: page.data.attributes.description,
      content: page.data.attributes.content,
   }
}