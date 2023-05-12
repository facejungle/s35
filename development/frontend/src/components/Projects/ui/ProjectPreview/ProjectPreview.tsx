import Link from "next/link";
import { TProject } from "../../model/type";
import style from './ProjectPreview.module.css'
import { ImageStrapi } from "@shared/index";

export function ProjectPreview(project: TProject): React.ReactNode {
   return (
      <div className={style.project_card}>
         <Link key={project.slug} href={project.link}>
            <ImageStrapi image={project.image} size="original" />
            <h2 className={style.project_title}>{project.title}</h2>
         </Link>
      </div>
   );
}

export default ProjectPreview