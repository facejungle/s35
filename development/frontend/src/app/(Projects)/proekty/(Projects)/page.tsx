import {Metadata} from "next/types";
import React, {use} from 'react';
import style from '@components/Projects/style/card.module.scss';
import {getProjectsPage} from "@components/StaticPages"
import {ProjectPreview, TProjectsData} from '@components/Projects';
import {notFound} from "next/navigation";
import {fetcher} from "@/shared";

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
    if (!projects || projects.data === null) return notFound();
    if (Props.searchParams.page) {
        let currentPage = Props.searchParams.page;

    }
    return projects.data.map(project => {
        return (
            <div key={project.id} className={style.card}>
                {ProjectPreview(project.attributes)}
            </div>
        );
    });
}

// export async function generateMetadata(): Promise<Metadata> {
//    const seo = await getProjectsPage();
//    if (seo === null) {
//       return {
//          title: 'Проекты не найдены.',
//          keywords: '404',
//          description: 'Проектов не найдено',
//       }
//    }
//    return getSeo(seo.data.attributes);
// }