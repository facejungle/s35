import { apiURL, apiPaths2 } from "@shared/api/config";
import { notFound } from "next/navigation";

type projectType = {
   title: string;
   description: string;
   totalArea: number;
   livingArea: number;
   profile: {
      length: number;
      width: number;
      height: number;
      gable: number;
   };
   category: {
      title: string;
      slug: string;
   };
   image?: {};
   gallery?: [{}];
   floors?: [{
      name: string;
      height: number;
      area: number;
      image: {};
      rooms: [{
         name: string;
         area: number;
      }];
   }];
}
export async function getProjectBySlug(projectSlug: string): Promise<projectType> {
   const data = await fetch(apiURL(apiPaths2({ slug: projectSlug }).projectBySlug));

   if (!data.ok) {
      console.log('Failed to fetch > project | getProject()');
      return notFound();
   }

   const project = await data.json();
   if (project.data === null) {
      console.log('project not found | getProject()');
      return notFound();
   }

   const projectCat = project.category
   return {
      title: project.title,
      description: project.description,
      totalArea: project.totalArea,
      livingArea: project.livingArea,
      profile: {
         length: project.profile.length,
         width: project.profile.width,
         height: project.profile.height,
         gable: project.profile.height
      },
      category: {
         title: projectCat === null ? 'no-category' : projectCat.title,
         slug: projectCat === null ? 'no-category' : projectCat.slug
      }
   };
}