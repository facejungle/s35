import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";
import { ProjectType, ProjectDataType } from '../model/type';
import placeholderPic from '@public/images/480x360.png';
import { urlHost } from "@shared/api/config";
import { getCategoryLink, getProjectLink, noCategory } from "./getLink";

export async function getProjects(): Promise<ProjectType[]> {
   try {
      const projects: ProjectDataType[] = await fetcher({ host: 'api', path: 'projects' });
      if (!projects) return notFound();

      return projects.map(project => {
         const projectCategory = project.category;
         const projectImage = project.image?.formats.thumbnail?.url;
         return {
            title: project.title,
            slug: project.slug,
            description: project.description,
            link: getProjectLink(project),
            totalArea: project.totalArea,
            livingArea: project.livingArea,
            profile: project.profile,
            category: {
               title: projectCategory ? projectCategory.title : noCategory.title,
               slug: projectCategory ? projectCategory.slug : noCategory.slug,
               link: getCategoryLink(project.category),
               description: projectCategory ? projectCategory.description : noCategory.description,
            },
            image: projectImage ? urlHost('strapi') + projectImage : placeholderPic
         };
      });
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getProjects()] > ` + err);
      return notFound();
   }
}