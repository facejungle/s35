import { getProject, getProjects } from "@/entities/Projects";
import { getSeo } from "@/entities";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
   const projects = await getProjects();
   if (projects !== null) {
      return projects.data.map((project: { attributes: { slug: any; }; }) => ({
         slug: project.attributes.slug,
      }));
   } else {
      return 'not-projects';
   }
}

export default async function projectPage({ params }: Props) {

   return (
      <>
         project
      </>
   );
}

type Props = {
   params: { slug: string; }
};