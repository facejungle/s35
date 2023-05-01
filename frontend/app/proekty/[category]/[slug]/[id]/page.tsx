import { getProjectById, getProjects } from "@shared/api/projects/index";
import { getSeo } from "@components/index";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';


type Props = {
   params: {
      id: number;
      slug: string;
      category: string;
   }
};
type projectUrlType = {
   id: number;
   attributes: {
      category: {
         data: {
            attributes: {
               slug: string;
            }
         };
      };
      slug: string;
   };
}
type projectType = {

}
export default async function ProjectPage({ params }: Props): Promise<React.ReactElement> {
   const project = await getProjectById(params.id);
   return (
      <>
         {project.title}
      </>
   );
}

export async function generateStaticParams() {
   const projects = await getProjects();
   if (projects !== null) {
      return projects.data.map((project: projectUrlType) => {
         const projectCategory = project.attributes.category.data
         return [{
            category: projectCategory === null ? 'no-category' : projectCategory.attributes.slug,
            slug: project.attributes.slug,
            id: project.id
         }]
      });
   }
   return notFound();
}
