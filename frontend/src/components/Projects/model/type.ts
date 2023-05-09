import { ImageStrapiData } from "@components/ImageStrapi/model/type";
import { StaticImageData } from "next/image";


export interface projectPreviewType {
   title: string;
   link: string;
   area: number;
   image: string;
   category: {
      title: string;
      link: string;
   };
}

/**
 * Projects / Strapi api v2 data
 */
interface Category<I, I0> {
   title: string;
   description: string;
   slug: string;
   image?: I | I0;
}
export interface CategoryType extends Category<StaticImageData, string> {
   link: string;
};
export type CategoryDataType = Category<ImageStrapiData, null>;


/**
 * Projects / Strapi api v2 data
 */
export interface ProjectType extends Project<CategoryType, StaticImageData, string> {
   link: string;
};
export type ProjectDataType = Project<CategoryDataType, ImageStrapiData, null>;

interface Project<C, I, I0> {
   title: string;
   slug: string;
   description: string;
   totalArea: number;
   livingArea: number;
   profile: {
      length: number;
      width: number;
      height: number;
      gable: number;
   };
   category: C;
   image: I | I0;
   gallery?: [I | I0];
   floors?: [{
      name: string;
      height: number;
      area: number;
      image: I | I0;
      rooms: [{
         name: string;
         area: number;
      }];
   }];
}

