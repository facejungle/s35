import {Metadata} from "next/types";
import React, {use} from 'react';
import style from '@components/Projects/style/card.module.scss';
import {getProjectsPage} from "@components/StaticPages"
import {ProjectPreview, getProjects, getProjectsLinks} from '@components/Projects';
import {notFound} from "next/navigation";

type TProjectsParams = {
    params: {};
    searchParams: {
        page: number;
    }
}
export default function Projects(searchParams: TProjectsParams): React.ReactElement[] {
    const projects = use(getProjects());
    if (!projects) return notFound();
    return projects.map(project => {
        return (
            <div key={project.slug} className={style.card}>
                {ProjectPreview(project)}
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