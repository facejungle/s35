import Link from "next/link";
import Image from 'next/image';
import { Suspense } from "react";
import Loading from "@/app/loading";
import { projectType } from "../../model/type";
import style from './ProjectPreview.module.css'
import placeholderPic from '@public/images/480x360.png';

export function ProjectPreview(project: projectType): React.ReactNode {
   return (
      <>
         <Suspense fallback={<Loading />}>
            <div className={style.project_card}>
               <Link key={project.slug} href={project.link}>
                  <Image
                     src={project.image || placeholderPic}
                     alt="Picture of the author"
                     width={480}
                     height={360}
                     className={style.preview_image}
                  />
                  <h2 className={style.project_title}>{project.title}</h2>
               </Link>
            </div>
         </Suspense>
      </>
   );
}
