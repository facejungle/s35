"use client"

import { ImageStrapi } from "@/shared";
import { ImageStrapiData } from "../../ImageStrapi/model/type"
import style from './MediaGallery.module.css';
import { useState } from "react";


type TPreviewImage = {
   IMAGE: ImageStrapiData | null,
   SIZE: string;
}

export function MediaGallery({ images }: { images: [ImageStrapiData | null] | undefined }) {
   if (images) {
      const firstImage = images[0];
      const [previewImage, setPreviewImage] = useState(firstImage);
      const thumbs = images.map(image => {
         return <ImageStrapi image={image} size="logo" />;
      });
      return (
         <div className={`${style.MediaGallery} flex-row`}>
            <div className={`${style.thumbnails} flex-column`}>
               {thumbs}
            </div>
            <div className={style.preview}>
               <ImageStrapi image={previewImage} size="original" />
            </div>
         </div>
      );
   }
   return <ImageStrapi image={null} size={'preview'} />
}

export default MediaGallery