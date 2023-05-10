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


interface baseCategory<I> {
   title: string;
   slug: string;
   description: string;
   image: I | null;
}
interface baseProject<I, C> {
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
   image: I | null;
   category: C;
   gallery?: [I | null];
   floors?: [{
      name: string;
      height: number;
      area: number;
      image: I | null;
      rooms: [{
         name: string;
         area: number;
      }];
   }];
}




export interface TProject<I = StaticImageData> extends baseProject<I | string, TProjectCategory> {
   link: string;
}
export type ProjectType = TProject | [TProject];


export interface TProjectCategory<I = StaticImageData> extends baseCategory<I | string> {
   link: string;
}
export type ProjectCategoryType = TProjectCategory | [TProjectCategory];



export interface ProjectDataType<I = ImageStrapiData> extends baseProject<I, ProjectCategoryDataType> {
   id: number;
}


export interface ProjectCategoryDataType<I = ImageStrapiData> extends baseCategory<I> {
   id: number;
}