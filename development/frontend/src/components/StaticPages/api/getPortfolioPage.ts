import { fetcher } from "@shared/index";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface portfolioPagePromise extends Metadata {
   data: any;
   slug?: string;
   image?: {};
};

export async function getPortfolioPage(): Promise<portfolioPagePromise> {
   const page = await fetcher({ host: 'API', path: 'PAGE_PORTFOLIO' });
   if (!page) return notFound();

   return page;
}