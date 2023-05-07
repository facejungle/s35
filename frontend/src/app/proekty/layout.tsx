import Sidebar from '@components/Sidebar/Sidebar';
import style from '@shared/styles/projects/layout.module.css';

export const dynamicParams = true;

export default async function ProjectsLayout({ children, }: { children: React.ReactElement }): Promise<React.ReactElement> {
   return (
      <>
         <div className={`${style.projects_wrapper} flex-row`}>
            {children}
         </div>
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

