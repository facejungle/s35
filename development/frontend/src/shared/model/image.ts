import {TApiData} from "@shared/index";
import {StaticImageData} from "next/image";


export const ImageSizes = {
    logo: {
        width: 240,
        height: 120
    },
    thumbnail: {
        width: 500,
        height: 300
    },
    preview: {
        width: 750,
        height: 500
    },
    large: {
        width: 1000,
        height: 750
    },
    xlarge: {
        width: 1920,
        height: 1080
    },
} as const;


export type TImageFormat = {
    url: string;
    width: number;
    height: number;
    name: string;
    hash: string;
    ext: string;
    mime: string;
}

export type TImageAttributes = {
    url: string;
    width: number;
    height: number;
    name: string;
    alternativeText: string;
    caption?: string;
    formats: {
        [Property in keyof typeof ImageSizes]-?: TImageFormat
    };
}

export type ImageData = {
    id: number;
    attributes: TImageAttributes;
}

export type TImage = {
    url: string | StaticImageData;
    width: number;
    height: number;
    alt?: string;
}
export type TImageData = TApiData<ImageData>;
export type TImagesData = TApiData<ImageData[]>;
export type TImageSizes = keyof typeof ImageSizes | 'original';

