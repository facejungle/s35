import {notFound} from 'next/navigation';
import {ProjectGeneral, getProjectBySlug, getProjects, getProjectsLinks} from "@components/Projects";
import style from '@components/Projects/style/ProjectPage.module.scss';
import React, {use} from "react";


type Props = {
    category: string;
    slug: string;
};

export default function ProjectPage({params}: { params: Props }): React.ReactElement {
    const project = use(getProjectBySlug(params.slug));
    if (!project || params.category !== project.category?.slug) return notFound();
    return (
        <>
            <div className={`${style.project_header} flex-column`}>
                <h1>{project.title}</h1>
                <ProjectGeneral project={project}/>
            </div>
        </>
    );
}

export async function generateStaticParams() {
    const projects = await getProjects();
    if (!projects) return notFound();
    return getProjectsLinks(projects);
}
