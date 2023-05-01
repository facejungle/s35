import { apiURL, apiPaths } from "@shared/api/config";

export async function getProjectsPage() {
   const pageData = await fetch(apiURL(apiPaths.pageProjects)).then((res) => res.json());
   if (pageData.data !== null) {
      return pageData;
   } else {
      return null;
   }
}