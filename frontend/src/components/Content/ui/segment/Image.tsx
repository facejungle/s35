"use client"
import { ContentImageType } from '../../model/type';
import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { ImagePlaceholder } from '@/shared/helpers';


export function ContentImage({ image }: { image: ContentImageType }): React.ReactElement {
   const imageUrl = image.image.formats.preview?.url;
   if (imageUrl) {
      return (
         <Suspense fallback={<Loading />}>
            <Image
               src={imageUrl}
               width={750}
               height={500}
               alt={image.image.alternativeText}
            />
         </Suspense>
      );
   }
   return <ImagePlaceholder size="preview" />
}