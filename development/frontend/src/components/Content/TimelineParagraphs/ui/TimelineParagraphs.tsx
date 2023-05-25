import {TTimelineParagraphsData} from "../model/type";
import style from './TimelineParagraphs.module.scss';
import React from "react";

export function TimelineParagraphs({data}: { data: TTimelineParagraphsData }): React.ReactElement {
    const paragraphs = data.paragraphs.map(paragraph => {
        return (
            <div className={style.card}>
                <div key={paragraph.id} className={style.info}>
                    <h3 className={style.title}>{paragraph.title}</h3>
                    <p>{paragraph.text}</p>
                </div>
            </div>
        );
    });
    return (
        <div className={style.TimelineParagraphs}>
            <h2>{data.title}</h2>
            <div className={style.outer}>
                {paragraphs}
            </div>
        </div>
    );
}