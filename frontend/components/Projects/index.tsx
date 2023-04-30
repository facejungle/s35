import { apiURL, apiPaths } from "@s/api/config";
import { notFound } from "next/navigation";

export async function getProjectsPage() {
   const pageData = await fetch(apiURL(apiPaths.pageProjects)).then((res) => res.json());
   if (pageData.data.id) {
      return pageData;
   } else {
      return null;
   }
}

export async function getProjects() {
   const projects = await fetch(apiURL(apiPaths.projectsPath)).then((res) => res.json());
   if (projects.data && Array.isArray(projects.data) && projects.data[0].id) {
      return projects;
   } else {
      return null;
   }
}

export async function getProject(links: typePageLink) {
   const slug = links.slug;
   const project = await fetch(apiURL(apiPaths.projectPath + slug)).then((page) => page.json());

   if (!project || !project.data) {
      return notFound;
   } else {
      return project.data.attributes;
   }
}

type typePageLink = {
   slug: string;
};
