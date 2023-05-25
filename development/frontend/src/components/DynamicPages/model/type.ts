import {TContentData} from "@/components/Content";
import {TApiData, TImageData} from "@shared/index";
import {TSeoData} from "@components/MetaSeo";

export type TPageAttributes = {
    slug: string;
    createdAt: string,
    updatedAt: string,
    seo: TSeoData;
    parent: {
        data: PageData | null;
    };
    content: TContentData;
}

type PageData = {
    id: number;
    attributes: TPageAttributes;
} | null;

export type TPageData = TApiData<PageData>;
export type TPagesData = TApiData<[PageData]>;


export type TPageParams = {
    slug: string[];
}