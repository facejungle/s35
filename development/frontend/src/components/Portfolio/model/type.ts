import {StaticImageData} from "next/image";
import {ImageDataType} from "@/shared";


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


export interface PortfolioDataType<I = ImageDataType> extends basePortfolio<I, PortfolioCategoryDataType | null> {
    id: number;
}

export interface PortfolioCategoryDataType<I = ImageDataType> extends baseCategory<I> {
    id: number;
}