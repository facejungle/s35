import { ImageStrapiData } from "@/shared/helpers/ImageStrapi/model/type";
import { StaticImageData } from "next/image";


export interface ProjectSettingsData {
   lengthText: string;
   widthText: string;
   heightText: string;
   gableText: string;
}

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
   profile: TProjectProfile;
   image: I;
   category: C;
   gallery?: [I];
   floors?: [{
      name: string;
      height: number;
      area: number;
      image: I;
      rooms: [{
         name: string;
         area: number;
      }];
   }];
}


export interface TProjectProfile {
   length: number;
   width: number;
   height: number;
   gable: number;
}

export interface TProject<I = ImageStrapiData> extends baseProject<I | null, TProjectCategory> {
   link: string;
}
export type ProjectType = TProject | [TProject];


export interface TProjectCategory<I = ImageStrapiData> extends baseCategory<I | null> {
   link: string;
}
export type ProjectCategoryType = TProjectCategory | [TProjectCategory];



export interface ProjectDataType<I = ImageStrapiData> extends baseProject<I | null, ProjectCategoryDataType> {
   id: number;
}


export interface ProjectCategoryDataType<I = ImageStrapiData> extends baseCategory<I | null> {
   id: number;
}
