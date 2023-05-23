import {TProject, TDProject, TProjectCategory, TDProjectCategory} from '../model/type';

export const projectsFolder = process.env.PROJECTS_URI || 'projects';
export const noCategory: TProjectCategory = {
    title: process.env.PROJECTS_NO_CATEGORY_TITLE || 'Other',
    slug: process.env.PROJECTS_NO_CATEGORY_SLUG || 'no-category',
    description: process.env.PROJECTS_NO_CATEGORY_DESCRIPTION || 'other',
    link: `/${projectsFolder}/${process.env.PROJECTS_NO_CATEGORY_SLUG || 'no-category'}`,
    image: null
};

export function getCategoryLink(data: TDProjectCategory): string {
    const category = data;
    const categoryLink = !category ? noCategory.slug : category.slug;
    return `/${projectsFolder}/${categoryLink}`;
}

export function getCategoriesLinks(data: TDProjectCategory[]): object[] {
    const categories = data;
    if (categories !== null) {
        return categories.map(category => {
            return {category: category.slug};
        });
    }
    throw new Error("getCategoriesLinks() > categories data is null");
}

export function getProjectLink(data: TDProject): string {
    if (data) {
        const project = data;
        const projectCategory = project.category;
        const projectLink = project.slug;
        const categoryLink = !projectCategory ? noCategory.slug : projectCategory.slug;
        return `/${projectsFolder}/${categoryLink}/${projectLink}`;
    }
    throw new Error("getProjectLink() > project data is null");
}

export type ProjectsLinksType = {
    category: string;
    project: string;
}

export function getProjectsLinks(data: TDProject[]): ProjectsLinksType[] {
    const projects = data;
    if (projects !== null) {
        return projects.map(project => {
            const projectCategory = project.category;
            const projectLink = project.slug;
            const categoryLink = !projectCategory ? noCategory.slug : projectCategory.slug;
            return {
                category: categoryLink,
                project: projectLink,
            };
        });
    }
    throw new Error("getProjectsLinks() > projects data is null");
}