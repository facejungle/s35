import {StaticImageData} from "next/image";
import {TImageData} from "@/shared";


interface baseCategory<I> {
    title: string;
    slug: string;
    description: string;
    image: I | null;
}

interface basePortfolio<I, C> {
    title: string;
    slug: string;
    description: string;
    image: I | null;
    category: C;
}


export interface PortfolioType<I = StaticImageData> extends basePortfolio<I | string, PortfolioCategoryType | null> {
    link: string;
}

export interface PortfolioCategoryType<I = StaticImageData> extends baseCategory<I | string> {
    link: string;
}


export interface PortfolioDataType<I = TImageData> extends basePortfolio<I, PortfolioCategoryDataType | null> {
    id: number;
}

export interface PortfolioCategoryDataType<I = TImageData> extends baseCategory<I> {
    id: number;
}