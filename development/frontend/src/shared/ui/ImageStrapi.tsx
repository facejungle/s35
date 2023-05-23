import Image from "next/image"
import {ImageSizes, ImageDataType, apiUrls, ImagePlaceholder, getHost, ImageFormatsType} from "../index";
import React from "react";
import Loading from "@/app/loading";

export function ImageStrapi({image, size, host}: {
    image: ImageDataType,
    size: keyof typeof ImageSizes | 'original',
    host?: keyof typeof apiUrls
}): React.ReactElement {
    let url = getHost('STRAPI');
    if (host === 'EXTERNAL') {
        url = getHost('STRAPI_EXT')
    }
    if (!image) {
        return ImagePlaceholder({size});
    } else {

        if (size === 'original') {
            return <Image
                src={url + image.url}
                width={image.width} height={image.height}
                alt=""/>;
        }

        let imageWidth;
        let imageHeight;
        let imageUrl;

        for (let imageSizesKey in ImageSizes) {
            let imageKey: keyof typeof ImageSizes = imageSizesKey as keyof typeof ImageSizes;
            let imageFormat = image.formats[imageKey];
            if (!imageFormat) break;
            imageWidth = imageFormat.width;
            imageHeight = imageFormat.height;
            imageUrl = imageFormat.url;
            if (imageSizesKey === size) break;
        }

        return <Image
            src={url + imageUrl}
            width={imageWidth} height={imageHeight}
            alt=""/>;
    }
}