import { ImageStrapiDataType } from "@components/ImageStrapi/model/type";
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
export interface ProjectCategoryType {
   title: string;
   slug: string;
   link: string;
   description?: string;
   image?: string | StaticImageData;
};



/**
 * Project Categories / Strapi api data
 */
export interface ProjectCategoryAttributes {
   id: number;
   title: string;
   description: string;
   slug: string;
   image: ImageStrapiDataType;
}
export interface ProjectCategoriesDataType {
   data: [{
      id: number;
      attributes: ProjectCategoryAttributes
   }];
}
export interface ProjectCategoryDataType {
   data: {
      id: number;
      attributes: ProjectCategoryAttributes
   };
}
/**
 * Projects / Strapi api data
 */
export interface ProjectAttributes {
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
   category: ProjectCategoryDataType;
   image?: ImageStrapiDataType;
   gallery?: [{}];
   floors?: [{
      name: string;
      height: number;
      area: number;
      image: ImageStrapiDataType;
      rooms: [{
         name: string;
         area: number;
      }];
   }];
}
export interface ProjectDataType {
   data: {
      attributes: ProjectAttributes;
   }
}
export interface ProjectsDataType {
   data: [{
      attributes: ProjectAttributes;
   }]
}