import style from '@shared/styles/projects/card.module.css';
import { getProjects } from "@shared/api/projects"
import { getProjectsPage } from "@shared/api/pages"
import { getSeo } from "@components/index";
import { Metadata } from "next/types";
import Image from 'next/image';
import placeholderPic from '@public/images/480x300.png';
import { Suspense, use } from 'react';
import Loading from '../loading';

export const dynamicParams = false;

export default function Projects(): React.ReactElement {
   const page = use(getProjects());
   return page.data.map((project: any) => {
      return (
         <div className={style.card}>
            <Suspense fallback={<Loading />}>
               <Image
                  src={placeholderPic}
                  alt="Picture of the author"
                  width={480}
                  height={300}
               />
               <h2>{project.attributes.title}</h2>
               <p>{project.attributes.description}</p>
            </Suspense>
         </div >
      );
   });
}

export async function generateMetadata(): Promise<Metadata> {
   const seo = await getProjectsPage();
   if (seo === null) {
      return {
         title: 'Проекты не найдены.',
         keywords: '404',
         description: 'Проектов не найдено',
      }
   }
   return getSeo(seo.data.attributes);
}