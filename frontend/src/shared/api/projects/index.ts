export { getProjectById } from "./getProjectById";
export { getProjects } from "./getProjects";
export { getProjectBySlug } from "./getProjectBySlug";
export { getCategories } from "./getCategories";
export { getCategoryBySlug } from "./getCategoryBySlug";

export interface CategoriesDataType {
   data: [{
      id: number;
      attributes: {
         title: string;
         description: string;
         slug: string;
         image: {};
      }
   }];
}
export interface CategoryDataType {
   id: number;
   title: string;
   description: string;
   slug: string;
   image: {};
}
export interface CategoryType {
   title: string;
   description: string;
   slug: string;
   image: {};
};