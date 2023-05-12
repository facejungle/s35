import { fetcher, urlHost } from "@shared/index";
import { notFound } from "next/navigation";
import { ProjectDataType, TProject } from "../model/type";
import { getCategoryLink, getProjectLink, noCategory } from "..";

export async function getProjectBySlug(projectSlug: string): Promise<TProject | undefined> {
   try {
      const project: ProjectDataType = await fetcher({ host: 'api', path: 'projectBySlug', slug: projectSlug });
      return {
         title: project.title,
         link: getProjectLink(project),
         slug: project.slug,
         description: project.description,
         image: project.image,
         totalArea: project.totalArea,
         livingArea: project.livingArea,
         profile: {
            length: project.profile.length,
            width: project.profile.width,
            height: project.profile.height,
            gable: project.profile.height
         },
         category: {
            title: project.category ? project.category.title : noCategory.title,
            slug: project.category ? project.category.slug : noCategory.slug,
            link: getCategoryLink(project.category),
            description: project.category ? project.category.description : noCategory.description,
            image: project.category?.image
         },
         gallery: project.gallery,
      };
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getProjectBySlug()] > ` + err);
      return undefined;
   }
}