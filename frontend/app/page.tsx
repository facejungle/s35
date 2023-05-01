import { getSeo } from "@components/index";
import { getFrontPageData } from "@/shared/api/pages";
import { Metadata } from "next/types";
import Image from 'next/image';
import ContentBlocks from '@components/Content/Content';
import style from '@/shared/styles/frontpage.module.css';



export default async function Home(): Promise<React.ReactElement> {
   const page = await getFrontPageData();
   const content = page.data.attributes.content;
   return (
      <>
         <div className={`${style.hero} flex-column`}>
            <h1>Вологодский сруб <br />от производителя</h1>
            <Image
               src="/images/srub_iz_brevna.png"
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
      </>
   )
}

export async function generateMetadata(): Promise<Metadata> {
   const seo = await getFrontPageData();
   if (seo.data === null) {
      return {
         title: 'Не найдено',
         keywords: '404',
         description: 'Не найдено',
      }
   }
   return getSeo(seo.data.attributes);
}
