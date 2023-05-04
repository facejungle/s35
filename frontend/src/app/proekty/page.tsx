import style from '@shared/styles/projects/card.module.css';
import { getProjects, getProjectsPage } from "@shared/api/projects"
import { getSeo } from "@components/index";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import placeholderPic from '@public/images/480x300.png';
import { Suspense } from 'react';
import Loading from '../loading';

export const dynamicParams = false;

export default async function Projects(): Promise<React.ReactElement> {
   const projects = await getProjects();
   if (projects.data === null) {
      return notFound()
   }
   return projects.data.map((project: any) => {
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