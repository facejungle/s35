import { fetcher } from "@shared/index";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface pricesPagePromise extends Metadata {
   data: any;
   slug?: string;
   image?: {};
};

export async function getPricesPage(): Promise<pricesPagePromise> {
   const page = await fetcher({ host: 'api', path: 'pagePrices' });
   if (!page) return notFound();

   return page;
}