import {ContentDataType} from "@/components/Content";
import {StaticImageData} from "next/image";
import {ImageDataType} from "@shared/index";

interface base<I> {
    title: string,
    slug: string,
    description: string,
    image: I,
    content: ContentDataType;
}

export interface DynamicPageDataType<I = ImageDataType> extends base<I | null> {
    id: number,
    parent: base<I> | null;
}

export interface DynamicPageType<I = StaticImageData> extends base<I> {
    parent: base<I> | null;
}