import style from '@shared/styles/projects.module.css';
import { getProjectsPage } from '@shared/api/projects';

export const dynamicParams = false;

export default async function ProjectsLayout({ children, }: { children: React.ReactElement }): Promise<React.ReactElement> {
   const project = await getProjectsPage();
   return (
      <>
         {children}
      </>
   )
}

export const metadata = {
   title: {
      template: "Проект - %s | СРУБ35.РФ",
      absolute: "Проекты"
   },
   keywords: "Проекты",
   description: "Проекты",
}

