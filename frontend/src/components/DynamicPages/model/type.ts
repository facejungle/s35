import { ContentDataType } from "@/components/Content/model/type";
import { ImageStrapiData } from "@/components/ImageStrapi/model/type"
import { StaticImageData } from "next/image";

interface base<I> {
   title: string,
   slug: string,
   description: string,
   image: I,
   content: ContentDataType;
}

export interface DynamicPageDataType<I = ImageStrapiData> extends base<I | null> {
   id: number,
   parent: base<I> | null;
}
export interface DynamicPageType<I = StaticImageData> extends base<I> {
   parent: base<I> | null;
}