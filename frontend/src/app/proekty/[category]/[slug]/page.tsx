import { getProjectBySlug, getProjects } from "@shared/api/projects";
import { getSeo } from "@components/index";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';


type projectUrlType = {
   attributes: {
      slug: string;
      category: {
         data: {
            attributes: {
               slug: string;
            }
         };
      };
   };
}


export default async function ProjectPage({ params }: { params: { slug: string; } }): Promise<React.ReactElement> {
   const project = await getProjectBySlug(params.slug);
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
         }]
      });
   }
   return notFound();
}
