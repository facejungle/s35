import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";
import { projectType } from "../model/type";

export async function getProjectBySlug(projectSlug: string): Promise<projectType> {
   const project = await fetcher({ host: 'api', path: 'projectBySlug', slugOrID: projectSlug });
   if (!project) return notFound();

   const projectCat = project.category
   return {
      title: project.title,
      link: '',
      slug: '',
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
         slug: projectCat === null ? 'no-category' : projectCat.slug,
         link: '',
      }
   };
}