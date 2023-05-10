import { fetcher, urlHost } from "@shared/api/config";
import { notFound } from "next/navigation";
import { ProjectDataType, TProject } from "../model/type";
import { getCategoryLink, getProjectLink, noCategory } from "..";

export async function getProjectBySlug(projectSlug: string): Promise<TProject> {
   try {
      const project: ProjectDataType = await fetcher({ host: 'api', path: 'projectBySlug', slug: projectSlug });
      const projectCategory = project.category;
      const projectImage = project.image?.formats.thumbnail?.url;
      const categoryImage = projectCategory?.image?.formats.thumbnail?.url;
      return {
         title: project.title,
         link: getProjectLink(project),
         slug: project.slug,
         description: project.description,
         image: projectImage ? urlHost('strapi') + projectImage : null,
         totalArea: project.totalArea,
         livingArea: project.livingArea,
         profile: {
            length: project.profile.length,
            width: project.profile.width,
            height: project.profile.height,
            gable: project.profile.height
         },
         category: {
            title: projectCategory ? projectCategory.title : noCategory.title,
            slug: projectCategory ? projectCategory.slug : noCategory.slug,
            link: getCategoryLink(project.category),
            description: projectCategory ? projectCategory.description : noCategory.description,
            image: categoryImage ? urlHost('strapi') + categoryImage : null
         },
      };
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getProjectById()] > ` + err);
      return notFound();
   }
}