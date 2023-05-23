export type ImageFormatsType = {
    url: string;
    width: number;
    height: number;
    name: string;
    hash: string;
    ext: string;
    mime: string;
}
export type ImageDataType = {
    id: number;
    url: string;
    width: number;
    height: number;
    name: string;
    alternativeText: string;
    caption?: string;
    formats: {
        logo?: ImageFormatsType;
        thumbnail?: ImageFormatsType;
        preview?: ImageFormatsType;
        large?: ImageFormatsType;
        xlarge?: ImageFormatsType;
    };
}
export type ImageSizesType = keyof ImageDataType["formats"] | 'original';

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