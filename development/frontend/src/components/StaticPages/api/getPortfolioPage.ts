import {fetcher} from "@shared/index";
import {Metadata} from "next";
import {notFound} from "next/navigation";


interface portfolioPagePromise extends Metadata {
    data: any;
    slug?: string;
    image?: {};
};

export async function getPortfolioPage(): Promise<portfolioPagePromise> {
    const portfolioPage = await fetcher({host: 'API', path: 'PAGE_PORTFOLIO'});
    if (!portfolioPage) return notFound();

    return portfolioPage;
}