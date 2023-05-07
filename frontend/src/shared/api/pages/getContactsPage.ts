import { contentType } from "@/components/Content/Content";
import { fetcher } from "@shared/api/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface contactsPagePromise extends Metadata, contentType {
   data: any;
   slug?: string;
   image?: {};
   content?: [contentType];
};

export async function getContactsPage(): Promise<contactsPagePromise> {
   const page = await fetcher({ host: 'api', path: 'pageContacts' });
   if (!page) return notFound();

   return page;
}