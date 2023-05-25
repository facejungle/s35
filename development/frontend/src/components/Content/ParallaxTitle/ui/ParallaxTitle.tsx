import {THeroData} from "../model/type";
import style from './ParallaxTitle.module.scss';
import {getHost} from "@/shared";
import React from "react";

export function ParallaxTitle({heroData}: { heroData: THeroData }): React.ReactElement {
    if (!heroData) return <>HeroTitle</>;
    return (
        <div className={style.HeroTitle}
             style={{backgroundImage: `url("${getHost('STRAPI') + heroData.image.data?.attributes.url}")`}}>
            <h1>{heroData.titleFirstRow}<br/>{heroData.titleTwoRow}</h1>
        </div>
    );
}