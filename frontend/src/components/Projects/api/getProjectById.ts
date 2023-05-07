import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";
import { projectType } from "../model/type";


export async function getProjectById(projectId: number): Promise<projectType> {
   const project = await fetcher({ host: 'api', path: 'projectById', slugOrID: projectId });
   if (!project) return notFound();

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