import { getProjects, getProjectsPage } from "@shared/api/projects/index"
import { getSeo } from "@components/index";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export default async function Projects(): Promise<React.ReactElement> {
   const projects = await getProjects();
   if (projects === null) {
      return notFound()
   }
   return (
      <>
         projects
      </>
   )
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