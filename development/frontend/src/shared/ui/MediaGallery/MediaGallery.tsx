"use client"

import style from './MediaGallery.module.scss';
import {Suspense, useState} from "react";
import Image from "next/image"
import {getHost, TImageData, ImagePlaceholder, ImageStrapi, TImagesData} from "@shared/index";
import Loading from "@/app/loading";

export function MediaGallery({images}: { images: TImagesData }) {
    if (images.data) {
        const [previewImage, setPreviewImage] = useState(images.data[0]);
        const thumbs = images.data.map((image, index) => {
            if (image) {
                return (
                    <button key={index} onClick={() => setPreviewImage(image)}>
                        <ImageStrapi host={'EXTERNAL'} image={image} size={'logo'}/>
                    </button>
                );
            }
            return <ImagePlaceholder size={'logo'}/>
        });
        const [isOpen, setIsOpen] = useState(false);
        const FullImage = ({setIsOpen}: { setIsOpen: (setIsOpen: boolean) => void }) => {
            if (previewImage) {
                return (
                    <>
                        <div className={style.full_image__bg} onClick={() => setIsOpen(false)}/>
                        <button onClick={() => setIsOpen(false)}>
                            <div className={style.full_image}>
                                <ImageStrapi host={'EXTERNAL'} image={previewImage} size={'original'}/>
                            </div>
                        </button>
                    </>
                );
            }
            return <ImagePlaceholder size={'preview'}/>;
        }
        return (
            <>
                <div className={`${style.MediaGallery} flex-row`}>
                    <div className={`${style.wrapper} flex-row`}>
                        <div className={`${style.thumbnails} flex-column`}>
                            {thumbs}
                        </div>
                        <div className={style.preview}>
                            <button onClick={() => setIsOpen(true)}>
                                {previewImage ?
                                    <ImageStrapi host={'EXTERNAL'} image={previewImage} size={'thumbnail'}/> :
                                    <ImagePlaceholder size={'thumbnail'}/>}
                            </button>
                            {isOpen && <FullImage setIsOpen={setIsOpen}/>}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return <ImagePlaceholder size={'thumbnail'}/>;
}

export default MediaGallery