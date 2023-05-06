import { getProjectBySlug, getProjects } from "@shared/api/projects";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';
import { use } from "react";


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

type Props = {
   params: {
      category: string;
      slug: string;
   }
}

export default function ProjectPage({ params }: Props): React.ReactElement {
   const project = use(getProjectBySlug(params.slug));
   if (params.category !== project.category.slug) {
      return notFound();
   }
   return (
      <>
         {project.title}
      </>
   );
}

export async function generateStaticParams() {
   const projects = await getProjects();
   return projects.data.map((project: projectUrlType) => {
      return [{
         slug: project.attributes.slug,
      }]
   });
}
