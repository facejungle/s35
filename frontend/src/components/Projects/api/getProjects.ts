import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";
import { projectsDataType, projectType } from '../model/type';
import placeholderPic from '@public/images/480x360.png';
import { urlHost } from "@shared/api/config";

export async function getProjects(): Promise<projectType[]> {
   const { data }: projectsDataType = await fetcher({ host: 'api', path: 'projects' });
   if (!data) return notFound();

   return data.map(project => {
      const projectCategory = project.attributes.category.data;
      const categoryLink = projectCategory ? `/proekty/${projectCategory.attributes.slug}` : '/proekty/bez-kategorii';
      const projectLink = `${categoryLink}/${project.attributes.slug}`;
      const projectImageData = project.attributes.image.data;
      const projectImage = projectImageData?.attributes.formats.thumbnail?.url;
      return {
         title: project.attributes.title,
         slug: project.attributes.slug,
         description: project.attributes.description,
         link: projectLink,
         totalArea: project.attributes.totalArea,
         livingArea: project.attributes.livingArea,
         profile: project.attributes.profile,
         category: {
            title: projectCategory.attributes.title,
            slug: projectCategory.attributes.slug,
            link: categoryLink,
         },
         image: projectImage ? urlHost('strapi') + projectImage : placeholderPic
      };
   });
}