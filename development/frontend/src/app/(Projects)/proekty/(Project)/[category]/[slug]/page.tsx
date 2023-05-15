import { notFound } from 'next/navigation';
import { ProjectGeneral, getProjectBySlug, getProjects } from "@components/Projects";
import style from '@components/Projects/style/ProjectPage.module.scss';

type Props = {
   category: string;
   slug: string;
}

export default async function ProjectPage({ params, searchParams }: { params: Props, searchParams: { lang?: string } }): Promise<React.ReactElement> {
   const project = await getProjectBySlug(params.slug);
   if (!project || params.category !== project.category.slug) return notFound();
   return (
      <>
         <div className={`${style.project_header} flex-column`}>
            <h1>{project.title}</h1>
            <ProjectGeneral project={project} lang={searchParams.lang} />
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
