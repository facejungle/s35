"use client"

import { ImageCustom, ImageStrapi, urlHost } from "@shared/index";
import { ImageStrapiData } from "../../ImageStrapi/model/type"
import style from './MediaGallery.module.css';
import { useState } from "react";


export function MediaGallery({ images }: { images: [ImageStrapiData | null] | undefined }) {
   if (images) {
      const firstImage = images[0];
      const [previewImage, setPreviewImage] = useState(<ImageCustom src={urlHost('strapiExt') + firstImage?.url} width={firstImage?.width || 750} height={firstImage?.width || 500} />);
      const thumbs = images.map((image, index) => {
         return (
            <button key={index} onClick={() => setPreviewImage(<ImageCustom src={urlHost('strapiExt') + image?.url} width={image?.width || 750} height={image?.height || 500} />)}>
               <><ImageCustom src={urlHost('strapiExt') + image?.formats.logo?.url} width={image?.formats.logo?.width || 240} height={image?.formats.logo?.height || 120} /></>
            </button>
         );
      });

      return (
         <>
            <div className={`${style.MediaGallery} flex-row`}>
               <div className={`${style.thumbnails} flex-column`}>
                  {thumbs}
               </div>
               <div className={style.preview}>
                  {previewImage}
               </div>
            </div>
         </>
      );
   }

   return <ImageCustom width={750} height={500} />;
}

export default MediaGallery