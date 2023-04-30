import { getProjects, getProjectsPage } from "@/entities/Projects"
import { getSeo } from "@/entities";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export default async function projects() {
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