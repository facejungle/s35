import { notFound } from 'next/navigation';
import { ProjectGeneral, getProjectBySlug, getProjects } from "@components/Projects";
import style from '@components/Projects/style/ProjectPage.module.scss';
import { i18n } from "@i18n/index";

type Props = {
   params: {
      category: string;
      slug: string;
   };
   searchParams?: {
      lang?: typeof i18n['locales'][number];
   };
};

export default async function ProjectPage(props: Props): Promise<React.ReactElement> {
   const project = await getProjectBySlug(props.params.slug);
   if (!project || props.params.category !== project.category.slug) return notFound();
   return (
      <>
         <div className={`${style.project_header} flex-column`}>
            <h1>{project.title}</h1>
            {ProjectGeneral({ project: project, lang: props.searchParams?.lang || i18n.defaultLocale })}
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
