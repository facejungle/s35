interface ImageProps {
   src?: string,
   className?: string,
   width: number,
   height: number,
   alt?: string,
};

export const ImageCustom = ({
   src, className, width, height, alt, ...attrs
}: ImageProps) => {
   if (!src) src = `http://via.placeholder.com/${width}x${height}`;
   return <img src={src} className={className} width={width} height={height} alt={alt} {...attrs} />
}

export default ImageCustom