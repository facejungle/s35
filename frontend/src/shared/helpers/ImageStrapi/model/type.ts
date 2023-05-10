export interface ImageFormatsType {
   url: string;
   width: string;
   height: string;
   name: string;
   hash: string;
   ext: string;
   mime: string;
}
export interface ImageStrapiData {
   id: number;
   url: string;
   width: string;
   height: string;
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