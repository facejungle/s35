import { getFrontPage } from "@shared/api/pages";
import { Metadata } from "next/types";
import Image from 'next/image';
import placeholderPic from '@public/images/600x400.png';
import ContentBlocks from '@components/Content/Content';
import style from '@shared/styles/pages/front.module.css';
import Sidebar from "@components/Sidebar/Sidebar";
import { use } from "react";

export default function Home(): React.ReactElement {
   const page = use(getFrontPage());
   return (
      <>
         <article className={`${style.front_page} flex-column`}>
            <div className={`${style.hero} flex-column`}>
               <h1>Вологодский сруб<br />от производителя</h1>
               <Image
                  src={placeholderPic}
                  alt="Picture of the author"
                  width={600}
                  height={400}
               />
            </div>
            <div className={`${style.work_example} flex-column`}>
               <h2 className={style.title}>Изготовление домов и бань из дерева</h2>
               <p>Portfolio cards</p>
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
            {ContentBlocks(page.content || [])}
         </article>
         <Sidebar widgets='default' />
      </>
   )
}

export async function generateMetadata(): Promise<Metadata> {
   const seo = await getFrontPage();
   if (seo === null) {
      return {
         title: 'Не найдено',
         keywords: '404',
         description: 'Не найдено',
      }
   }
   return {
      title: seo.title,
      description: seo.description
   }
}
