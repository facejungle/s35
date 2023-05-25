import {TSeoData} from "@components/MetaSeo";
import {TApiData} from "@/shared";

export type TFrontPageAttributes = {
    seo: TSeoData;
    hero: {}
}

type FrontPageData = {
    id: number;
    attributes: TFrontPageAttributes;
}

export type TFrontPageData = TApiData<FrontPageData>