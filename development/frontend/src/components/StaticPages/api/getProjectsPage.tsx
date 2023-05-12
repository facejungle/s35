import { fetcher } from '@shared/index';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface projectsPagePromise extends Metadata {
   data: {
      attributes: {}
   };
   slug?: string;
   image?: {};
};

export async function getProjectsPage(): Promise<projectsPagePromise> {
   const page = await fetcher({ host: 'api', path: 'pageProjects' });
   if (!page || page === null || undefined) {
      return notFound();
   }
   return page
}