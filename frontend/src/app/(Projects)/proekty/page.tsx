import { Metadata } from "next/types";
import { use } from 'react';
import style from '@components/Projects/ui/style/card.module.css';
import { getProjectsPage } from "@components/StaticPages"
import { ProjectPreview, getProjects } from '@components/Projects';
import { getSeo } from "@components/index";

export const dynamicParams = false;

export default function Projects(): React.ReactNode {
   const projects = use(getProjects());
   return projects.map(project => {
      return (
         <div key={project.slug} className={style.card}>
            {ProjectPreview(project)}
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