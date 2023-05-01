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
export async function getProjectById(projectId: number): Promise<projectType> {
   const data = await fetch(apiURL(apiPaths2(projectId).projectById));
   if (!data.ok) {
      console.log('Failed to fetch > project | getProject()');
      return notFound();
   }

   const project = await data.json();
   if (project.data === null) {
      console.log('project not found | getProject()');
      return notFound();
   }

   const projectCat = project.data.attributes.category.data
   return {
      title: project.data.attributes.title,
      description: project.data.attributes.description,
      totalArea: project.data.attributes.totalArea,
      livingArea: project.data.attributes.livingArea,
      profile: {
         length: project.data.attributes.profile.length,
         width: project.data.attributes.profile.width,
         height: project.data.attributes.profile.height,
         gable: project.data.attributes.profile.height
      },
      category: {
         title: projectCat === null ? 'no-category' : projectCat.attributes.title,
         slug: projectCat === null ? 'no-category' : projectCat.attributes.slug
      }
   };
}