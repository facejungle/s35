import { fetcher } from '@shared/api/config';
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
   if (!page) {
      return notFound();
   }
   return page
}