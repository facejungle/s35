import { getProject, getProjects } from "@/entities/Projects";
import { getSeo } from "@/entities";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';

export default async function project({ params }: Props) {
   const project = await getProject(params);
   if (project === null) {
      return notFound();
   }
   return (
      <>
         {project.title}
      </>
   )
}

export async function generateStaticParams() {
   const projects = await getProjects();
   if (projects !== null) {
      const projectLink = projects.data.map((project: { attributes: { parent: { data: any; }; slug: any; }; }) => {
         const Parent = project.attributes.parent.data;
         const Link = Parent === null ? [project.attributes.slug] : [Parent.attributes.slug, project.attributes.slug];
         return {
            Link
         }
      })
      return projectLink
   }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const seo = await getProject(params);
   if (seo === null) {
      return {
         title: 'Не найден',
         keywords: '404',
         description: 'Проект не найден',
      }
   }
   return getSeo(seo);
}

type Props = {
   params: { projectLink: string[]; }
};