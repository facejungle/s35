import {TSeoData} from "../index";
import {Metadata} from "next/types";

export default function MetaSeo(metaSeo: TSeoData): Metadata {
    if (!metaSeo || !metaSeo.metaImage.data) return {};
    return {
        title: metaSeo.metaTitle,
        description: metaSeo.metaDescription,
        keywords: metaSeo.keywords,
        robots: metaSeo.metaRobots,
        viewport: metaSeo.metaViewport,
        alternates: {
            canonical: metaSeo.canonicalURL,
        },
        openGraph: {
            title: metaSeo.metaTitle,
            description: metaSeo.metaDescription,
            images: {
                url: metaSeo.metaImage.data.attributes.url,
                width: metaSeo.metaImage.data.attributes.width,
                height: metaSeo.metaImage.data.attributes.height,
            }
        },
        twitter: {
            title: metaSeo.metaTitle,
            description: metaSeo.metaDescription,
            images: {
                url: metaSeo.metaImage.data.attributes.url,
                width: metaSeo.metaImage.data.attributes.width,
                height: metaSeo.metaImage.data.attributes.height,
            }
        }
    }
}