import { notFound } from 'next/navigation';
import { use } from "react";
import { ProjectGeneral, getProjectBySlug, getProjects } from "@components/Projects";
import style from '@components/Projects/style/ProjectPage.module.scss';
import getProjectSettings from '@/components/Projects/api/getProjectSettings';


type Props = {
   params: {
      category: string;
      slug: string;
   }
}

export default function ProjectPage({ params }: Props): React.ReactElement {
   const project = use(getProjectBySlug(params.slug));
   if (!project || params.category !== project.category.slug) return notFound();
   const projectSettings = use(getProjectSettings());
   return (
      <>
         <div className={`${style.project_header} flex-column`}>
            <h1>{project.title}</h1>
            <ProjectGeneral project={project} settings={projectSettings} />
         </div>
      </>
   );
}

export async function generateStaticParams() {
   const projects = await getProjects();
   if (!projects) return notFound();
   return projects.map(project => {
      return {
         slug: project.slug,
      }
   });
}
