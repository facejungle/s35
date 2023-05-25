// API
export {getProjects} from "./api/getProjects";
export {getProjectBySlug} from "./api/getProjectBySlug";
export {getCategories} from "./api/getCategories";
export {getCategoryBySlug} from "./api/getCategoryBySlug";
// HELPERS
export {getCategoryLink, getCategoriesLinks, getProjectLink, getProjectsLinks, noCategory} from "./helpers/getLink";
// TYPES
export type {
    TProjectCategory,
    TProjectCatAttributes,
    TProjectCatData,
    TProjectCatsData,

    TProject,
    TProjectAttributes,
    TProjectData,
    TProjectsData,
} from './model/type';
// UI
export {ProjectPreview} from "./ui/ProjectPreview/ProjectPreview";
export {ProjectGeneral} from "./ui/ProjectGeneral/ProjectGeneral";