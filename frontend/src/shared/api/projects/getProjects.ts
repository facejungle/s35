import { fetcher } from "@shared/api/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function getProjects() {
   const projects = await fetcher('api', 'projects');
   if (!projects) return notFound();

   return projects;
}