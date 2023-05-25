import {TImageData} from "@/shared";
import {TImage} from "@shared/model/image";

type SeoData<I> = {
    metaTitle: string;
    metaDescription: string;
    metaImage: I;
    keywords?: string;
    metaRobots?: string;
    metaViewport?: string;
    canonicalURL?: string;
}

export type TSeoData = SeoData<TImageData>;

export type TSeo = SeoData<TImage>;