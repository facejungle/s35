import {notFound} from 'next/navigation';
import {ProjectGeneral, getProjectBySlug, getProjects, getProjectsLinks} from "@components/Projects";
import style from '@components/Projects/style/ProjectPage.module.scss';
import React, {use} from "react";


type Props = {
    category: string;
    slug: string;
};

export default async function ProjectPage({params}: { params: Props }): Promise<React.ReactElement> {
    const project = await getProjectBySlug(params.slug);
    if (!project || params.category !== project.data?.attributes.category?.data.attributes.slug) return notFound();
    return (
        <>
            <div className={`${style.project_header} flex-column`}>
                <h1>{project.data.attributes.title}</h1>
                <ProjectGeneral project={project.data.attributes}/>
            </div>
        </>
    );
}

export async function generateStaticParams() {
    const projects = await getProjects();
    if (!projects) return notFound();
    return getProjectsLinks(projects.data);
}
