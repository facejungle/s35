export interface ImageStrapiDataType {
   data: {
      id: number;
      attributes: {
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
         }
         hash: string;
         ext: string;
         mime: string;
      }
   }
}
export interface ImageFormatsType {
   url: string;
   width: string;
   height: string;
   name: string;
   hash: string;
   ext: string;
   mime: string;
}
export interface ImageStrapiType {
   id: number;
   url: string;
   width: string;
   height: string;
   name: string;
   alternativeText: string;
   caption?: string;
   formats: ImageFormatsType;
}