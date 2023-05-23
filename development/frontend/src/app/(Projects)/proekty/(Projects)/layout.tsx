import {Sidebar} from '@components/Sidebar';
import style from '@components/Projects/style/ProjectsPage.module.scss';

export default async function ProjectsLayout({children,}: {
    children: React.ReactElement
}): Promise<React.ReactElement> {
    return (
        <article className={`${style.projects} flex-row`}>
            {children}
        </article>
    )
}
//
// export const metadata = {
//     title: {
//         template: "Проект - %s | СРУБ35.РФ",
//         absolute: "Проекты"
//     },
//     keywords: "Проекты",
//     description: "Проекты",
// }

