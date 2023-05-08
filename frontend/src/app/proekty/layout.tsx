import { Sidebar } from '@components/Sidebar';
import style from '@components/Projects/ui/style/layout.module.css';

export const dynamicParams = true;

export default async function ProjectsLayout({ children, }: { children: React.ReactElement }): Promise<React.ReactElement> {
   return (
      <>
         <article className={`${style.projects} flex-row`}>
            {children}
         </article>
         <Sidebar widgets={'default'} />
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

