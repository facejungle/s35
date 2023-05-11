import { ContentDataType } from "@components/Content/model/type";
import { fetcher } from "@shared/index";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface contactsPagePromise extends Metadata, ContentDataType {
   data: any;
   slug?: string;
   image?: {};
   content?: [ContentDataType];
};

export async function getContactsPage(): Promise<contactsPagePromise> {
   const page = await fetcher({ host: 'api', path: 'pageContacts' });
   if (!page) return notFound();

   return page;
}