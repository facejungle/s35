import {TProjectCategory, TProjectData, TProjectCatData, TProjectsData, TProjectCatsData} from '../model/type';
import placeholderThumbnail from '@public/images/500x300.webp';

export const projectsFolder = process.env.PROJECTS_URI || 'projects';
export const noCategory: TProjectCategory = {
    slug: process.env.PROJECTS_NO_CATEGORY_SLUG || 'no-category',
    seo: {
        metaTitle: process.env.PROJECTS_NO_CATEGORY_TITLE || 'Other',
        metaDescription: process.env.PROJECTS_NO_CATEGORY_DESCRIPTION || 'other',
        metaImage: {
            url: placeholderThumbnail,
            width: 500,
            height: 300,
        },
    },
    link: `/${projectsFolder}/${process.env.PROJECTS_NO_CATEGORY_SLUG || 'no-category'}`,
};

export function getCategoryLink(attributes: TProjectCatData['data']['attributes']): string {
    const category = attributes;
    const categoryLink = !category ? noCategory.slug : category.slug;
    return `/${projectsFolder}/${categoryLink}`;
}

export function getCategoriesLinks(data: TProjectCatsData['data']): object[] {
    const categories = data;
    if (categories !== null) {
        return categories.map(category => {
            return {category: category.attributes.slug};
        });
    }
    throw new Error("getCategoriesLinks() > categories data is null");
}

export function getProjectLink(attributes: TProjectData['data']['attributes']): string {
    if (attributes) {

        const project = attributes;
        const projectCategory = project.category.data;
        const projectLink = project.slug;
        const categoryLink = !projectCategory ? noCategory.slug : projectCategory.attributes.slug;
        return `/${projectsFolder}/${categoryLink}/${projectLink}`;
    }
    throw new Error("getProjectLink() > project data is null");
}

export type TProjectsLinks = {
    category: string;
    project: string;
}

export function getProjectsLinks(data: TProjectsData['data']): TProjectsLinks[] {
    const projects = data;
    if (projects !== null) {
        return projects.map(project => {
            const projectCategory = project.attributes.category;
            const projectLink = project.attributes.slug;
            const categoryLink = !projectCategory ? noCategory.slug : projectCategory.data.attributes.slug;
            return {
                category: categoryLink,
                project: projectLink,
            };
        });
    }
    throw new Error("getProjectsLinks() > projects data is null");
}