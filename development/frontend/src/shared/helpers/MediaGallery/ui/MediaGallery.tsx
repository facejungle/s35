"use client"

import { ImageCustom, urlHost } from "@shared/index";
import { ImageStrapiData } from "../../ImageStrapi/model/type"
import style from './MediaGallery.module.css';
import { useState } from "react";
import Image from "next/image"

export function MediaGallery({ images }: { images: [ImageStrapiData | null] | undefined }) {
   const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkMAYAADkANVKH3ScAAAAASUVORK5CYII="
   if (images) {
      const firstImage = images[0];
      const [previewImage, setPreviewImage] = useState(
         <Image
            src={urlHost('strapiExt') + firstImage?.url}
            width={firstImage?.width || 750}
            height={firstImage?.height || 500}
            alt={firstImage?.alternativeText || ''}
            placeholder='blur'
            blurDataURL={blurData}
         />
      );
      const thumbs = images.map((image, index) => {
         return (
            <button key={index} onClick={() => setPreviewImage(
               <Image
                  src={urlHost('strapiExt') + image?.url}
                  width={image?.width || 750}
                  height={image?.height || 500}
                  alt={image?.alternativeText || ''}
                  placeholder='blur'
                  blurDataURL={blurData}
               />
            )}>
               <Image
                  src={urlHost('strapiExt') + image?.formats.logo?.url}
                  width={image?.formats.logo?.width || 240}
                  height={image?.formats.logo?.height || 120}
                  alt={image?.alternativeText || ''}
                  placeholder='blur'
                  blurDataURL={blurData}
               />
            </button>
         );
      });

      return (
         <>
            <div className={`${style.MediaGallery} flex-row`}>
               <div className={`${style.wrapper} flex-row`}>
                  <div className={`${style.thumbnails} flex-column`}>
                     {thumbs}
                  </div>
                  <div className={style.preview}>
                     {previewImage}
                     <span>{previewImage}</span>
                  </div>
               </div>
            </div>
         </>
      );
   }

   return <ImageCustom width={750} height={500} />;
}

export default MediaGallery