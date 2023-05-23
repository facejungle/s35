import {fetcher} from '@shared/index';
import {Metadata} from 'next';
import {notFound} from 'next/navigation';

interface projectsPagePromise extends Metadata {
    data: {
        attributes: {}
    };
    slug?: string;
    image?: {};
};

export async function getProjectsPage(): Promise<projectsPagePromise> {
    const projects = await fetcher({host: 'API', path: 'PAGE_PROJECTS'});
    if (!projects) return notFound();
    return projects
}