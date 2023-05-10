import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";
import { TProject, ProjectDataType } from '../model/type';
import { urlHost } from "@shared/api/config";
import { getCategoryLink, getProjectLink, noCategory } from "..";

export async function getProjects(): Promise<TProject[]> {
   try {
      const projects: [ProjectDataType] = await fetcher({ host: 'api', path: 'projects' });
      if (!projects) return notFound();
      return projects.map(project => {
         const projectCategory = project.category;
         const projectImage = project.image?.formats.thumbnail?.url;
         const categoryImage = projectCategory?.image?.formats.thumbnail?.url;
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
               image: projectImage ? urlHost('strapi') + categoryImage : null
            },
            image: projectImage ? urlHost('strapi') + projectImage : null
         };
      });
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getProjects()] > ` + err);
      return notFound();
   }
}