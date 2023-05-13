import Image from "next/image"
import { imageSizesType } from "@/shared/model/type";
import placeholderLogo from '@public/images/240x120.webp';
import placeholderThumbnail from '@public/images/500x300.webp';
import placeholderPreview from '@public/images/750x500.webp';
import placeholderLarge from '@public/images/1000x750.webp';
import placeholderXLarge from '@public/images/1920x1080.webp';
import style from './ImagePlaceholder.module.css';

/**
 * @size "logo"      > 240x120
 * @size "thumbnail" > 500x300
 * @size "preview"   > 750x500
 * @size "large"     > 1000x750
 * @size "xlarge"    > 1920x1080
 * 
 * @returns Image from "next/image"
 */
export function ImagePlaceholder({ size }: { size: imageSizesType }) {
  const blurData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkMAYAADkANVKH3ScAAAAASUVORK5CYII="
  if (size === 'logo') return <Image className={style.placeholder_image} src={placeholderLogo} width={240} height={120} placeholder="blur" blurDataURL={blurData} quality={100} alt="" />
  if (size === 'thumbnail') return <Image src={placeholderThumbnail} width={500} height={300} placeholder="blur" blurDataURL={blurData} quality={100} alt="" />
  if (size === 'preview') return <Image src={placeholderPreview} width={750} height={500} placeholder="blur" blurDataURL={blurData} quality={100} alt="" />
  if (size === 'large') return <Image src={placeholderLarge} width={1000} height={750} placeholder="blur" blurDataURL={blurData} quality={100} alt="" />
  if (size === 'xlarge') return <Image src={placeholderXLarge} width={1920} height={1080} placeholder="blur" blurDataURL={blurData} quality={100} alt="" />
  return <Image src={placeholderThumbnail} width={500} height={300} alt="" />
}