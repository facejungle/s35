import Image, { StaticImageData } from "next/image"
import { imageSizesType, urlHostType } from "@/shared/model/type";
import { ImageStrapiData } from "../model/type";
import { ImagePlaceholder, urlHost } from "@shared/index";
import style from "./ImageStrapi.module.css";

/**
 * @size "logo"      > 240x120
 * @size "thumbnail" > 500x300
 * @size "preview"   > 750x500
 * @size "large"     > 1000x750
 * @size "xlarge"    > 1920x1080
 * 
 * @returns Image from "next/image"
 */
export function ImageStrapi({ image, size, host }: { image: ImageStrapiData | null, size: imageSizesType, host?: urlHostType }) {
   const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkMAYAADkANVKH3ScAAAAASUVORK5CYII="
   if (image) {
      const url = urlHost(host ? host : 'strapi');
      if (size === 'original') {
         return <Image className={style.strapi_image} src={url + image.url} width={image.width} height={image.height} placeholder="blur" blurDataURL={blurData} alt="" />;
      }
      if (size === 'logo') {
         const img = image.formats.logo;
         if (img) return <Image className={style.strapi_image} src={url + img.url} width={img.width} height={img.height} placeholder="blur" blurDataURL={blurData} alt="" />;
         return ImagePlaceholder({ size });
      }
      if (size === 'thumbnail') {
         const img = image.formats.thumbnail;
         if (img) return <Image className={style.strapi_image} src={url + img.url} width={img.width} height={img.height} placeholder="blur" blurDataURL={blurData} alt="" />;
         return ImagePlaceholder({ size });
      }
      if (size === 'preview') {
         const img = image.formats.preview;
         if (img) return <Image className={style.strapi_image} src={url + img.url} width={img.width} height={img.height} placeholder="blur" blurDataURL={blurData} alt="" />;
         return ImagePlaceholder({ size });
      }
      if (size === 'large') {
         const img = image.formats.large;
         if (img) return <Image className={style.strapi_image} src={url + img.url} width={img.width} height={img.height} placeholder="blur" blurDataURL={blurData} alt="" />;
         return ImagePlaceholder({ size });
      }
      if (size === 'xlarge') {
         const img = image.formats.xlarge;
         if (img) return <Image className={style.strapi_image} src={url + img.url} width={img.width} height={img.height} placeholder="blur" blurDataURL={blurData} alt="" />;
         return ImagePlaceholder({ size });
      }
   }
   return ImagePlaceholder({ size });
}