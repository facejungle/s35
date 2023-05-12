export interface ImageFormatsType {
   url: string;
   width: number;
   height: number;
   name: string;
   hash: string;
   ext: string;
   mime: string;
}
export interface ImageStrapiData {
   id: number;
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
   };
}
interface ImageBase {
   url: string
}