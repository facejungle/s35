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

export function getProjectCategoryLink(data: TProjectCatData['data']): string {
    const category = data;
    const categoryLink = !category ? noCategory.slug : category.attributes.slug;
    return `/${projectsFolder}/${categoryLink}`;
}

export function getProjectCategoriesLinks(data: TProjectCatsData['data']): object[] {
    const categories = data;
    if (categories !== null) {
        return categories.map(category => {
            return {category: category.attributes.slug};
        });
    }
    throw new Error("getCategoriesLinks() > categories data is null");
}

export function getProjectLink(data: TProjectData['data']): string {
    if (data) {
        const project = data;
        const projectCategory = project.attributes.category.data;
        const projectLink = project.attributes.slug;
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
            const projectCategory = project.attributes.category.data;
            const projectLink = project.attributes.slug;
            const categoryLink = !projectCategory ? noCategory.slug : projectCategory.attributes.slug;
            return {
                category: categoryLink,
                project: projectLink,
            };
        });
    }
    throw new Error("getProjectsLinks() > projects data is null");
}