import { fetcher } from "@shared/index";
import { notFound } from "next/navigation";
import { TProject, ProjectDataType } from '../model/type';
import { getCategoryLink, getProjectLink, noCategory } from "..";

export async function getProjects(): Promise<TProject[] | undefined> {
   try {
      const projects: [ProjectDataType] = await fetcher({ host: 'API', path: 'PROJECTS' });
      if (!projects) return undefined;
      return projects.map(project => {
         return {
            title: project.title,
            slug: project.slug,
            description: project.description,
            link: getProjectLink(project),
            totalArea: project.totalArea,
            livingArea: project.livingArea,
            profile: project.profile,
            image: project.image,
            category: {
               title: project.category ? project.category.title : noCategory.title,
               slug: project.category ? project.category.slug : noCategory.slug,
               link: getCategoryLink(project.category),
               description: project.category ? project.category.description : noCategory.description,
               image: project.category?.image
            },
         };
      });
   }
   catch (err) {
      console.log(`[${process.env.PROJECT_SLUG}][getProjects()] > ` + err);
      return undefined;
   }
}