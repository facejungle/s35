import { fetcher } from "@shared/api/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface portfolioPagePromise extends Metadata {
   data: any;
   slug?: string;
   image?: {};
};

export async function getPortfolioPage(): Promise<portfolioPagePromise> {
   const page = await fetcher({ host: 'api', path: 'pagePortfolio' });
   if (!page) return notFound();

   return page;
}