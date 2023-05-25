import {Metadata} from "next/types";
import React from 'react';
import style from '@components/Projects/style/card.module.scss';
import {ProjectPreview, TProjectsData} from '@components/Projects';
import {notFound} from "next/navigation";
import {fetcher, getSiteSettings} from "@/shared";
import MetaSeo from "@components/MetaSeo/ui/MetaSeo";

type TProjectsParams = {
    params: {};
    searchParams: {
        page?: number;
    }
}
export default async function Projects(Props: TProjectsParams): Promise<React.ReactElement[]> {

    let start = 0;
    let limit = 21;
    const projects: TProjectsData = await fetcher({
        host: 'API',
        path: 'PROJECTS',
        pagination: {pageSize: 21, page: 1}
    });
    console.log(projects)
    if (!projects.data) return notFound();
    if (Props.searchParams.page) {
        let currentPage = Props.searchParams.page;

    }
    return projects.data.map(project => {
        return (
            <div key={project.id} className={style.card}>
                {ProjectPreview(project)}
            </div>
        );
    });
}

export async function generateMetadata(): Promise<Metadata> {
    const siteSettings = await getSiteSettings();
    const projectsPage = siteSettings.data?.attributes.projectsPage.data;
    if (projectsPage) return MetaSeo(projectsPage.attributes.seo);
    return {}
}