import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { TProject } from "../../model/type";
import style from './ProjectPreview.module.css'
import { ImageStrapi } from "@shared/index";

export function ProjectPreview(project: TProject): React.ReactNode {
   return (
      <>
         <Suspense fallback={<Loading />}>
            <div className={style.project_card}>
               <Link key={project.slug} href={project.link}>
                  <ImageStrapi image={project.image} size="original" />
                  <h2 className={style.project_title}>{project.title}</h2>
               </Link>
            </div>
         </Suspense>
      </>
   );
}

export default ProjectPreview