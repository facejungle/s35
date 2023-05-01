import { apiURL, apiPaths } from "@shared/api/config";

export async function getProjects() {
   const projects = await fetch(apiURL(apiPaths.projectsPath)).then((res) => res.json());
   if (projects.data && Array.isArray(projects.data) && projects.data[0]) {
      return projects;
   } else {
      return null;
   }
}