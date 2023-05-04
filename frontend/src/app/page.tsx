import { getSeo } from "@components/index";
import { getFrontPage } from "@shared/api/pages";
import { Metadata } from "next/types";
import Image from 'next/image';
import placeholderPic from '@public/images/600x400.png';
import ContentBlocks from '@components/Content/Content';
import style from '@shared/styles/pages/front.module.css';
import Sidebar from "@widgets/Sidebar/Sidebar";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home(): Promise<React.ReactElement> {
   const page = await getFrontPage();
   if (!page) {
      return <></>
   }
   const content = page.data.attributes.content;

   return (
      <>
         <article className={style.front_page}>
            <Suspense fallback={<Loading />}>
               <div className={`${style.hero} flex-column`}>
                  <h1>Вологодский сруб <br />от производителя</h1>
                  <Image
                     src={placeholderPic}
                     alt="Picture of the author"
                     width={600}
                     height={400}
                  />
               </div>
               <div className={style.work_example}>
                  <h2 className={style.title}>Изготовление домов и бань из дерева</h2>
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
               {ContentBlocks(content)}
            </Suspense>
         </article>
         <Sidebar />
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
   return getSeo(seo.data.attributes);
}
