import { notFound } from 'next/navigation';
import { use } from "react";
import { ImageStrapi } from "@/shared";
import { ProjectGeneral, getProjectBySlug, getProjects } from "@components/Projects";
import style from '@components/Projects/ui/style/ProjectPage.module.css';
import { ProjectProfile } from '@/components/Projects';
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
            <ProjectGeneral project={project} />
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
