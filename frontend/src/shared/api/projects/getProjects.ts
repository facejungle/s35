import { fetcher } from "@shared/api/config";
import { notFound } from "next/navigation";

export async function getProjects() {
   const projects = await fetcher({ host: 'api', path: 'projects' });
   if (!projects) return notFound();

   return projects;
}