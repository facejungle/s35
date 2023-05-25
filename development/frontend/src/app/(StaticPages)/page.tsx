import {Metadata} from "next/types";
import {getFrontPage} from "@components/StaticPages";
import style from '@components/StaticPages/style/front.module.scss';
import {ImagePlaceholder} from "@/shared/index";
import React from "react";
import MetaSeo from "@components/MetaSeo/ui/MetaSeo";


export default async function FrontPage(): Promise<React.ReactElement> {
    const page = await getFrontPage();
    return (
        <article className={`${style.front_page} flex-column`}>
            <div className={`${style.hero} flex-column`}>
                <h1>Вологодский сруб<br/>от производителя</h1>
                <ImagePlaceholder size="preview"/>
            </div>
            <div className={`${style.portfolio_cards} flex-column`}>
                <h2 className={style.title}>Изготовление домов и бань из дерева</h2>
                <p>Portfolio cards</p>
            </div>
            <div className={style.advantage_text}>
                <h2>title</h2>
                <p>first paragraph</p>
                <p>two paragraph</p>
            </div>
            <div className={`${style.two_block} flex-row`}>
                <div className={style.prices}>
                    <h3>Цены</h3>
                    <ul>
                        <li>Дома и бани</li>
                        <li>Услуги</li>
                        <li>Доставка</li>
                    </ul>
                </div>
                <div className={style.portfolio}>
                    <h3>Портфолио</h3>
                </div>
                <div className={style.projects}>
                    <h3>Проекты</h3>
                </div>
            </div>
        </article>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const frontPage = await getFrontPage();
    return MetaSeo(frontPage.data.attributes.seo);
}
