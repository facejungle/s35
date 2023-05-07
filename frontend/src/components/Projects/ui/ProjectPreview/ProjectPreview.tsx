import style from './ProjectPreview.module.css'
import Loading from "@/app/loading";
import Link from "next/link";
import Image from 'next/image';
import { Suspense } from "react";
import { projectPreviewType } from "../../model/type";

export function ProjectPreview(project: projectPreviewType): React.ReactNode {
   return (
      <>
         <div className={style.card}>
            <Suspense fallback={<Loading />}>
               <Link key={''} href={''}>
                  <Image
                     src={project.image}
                     alt="Picture of the author"
                     width={480}
                     height={300}
                  />
                  <h2>{project.title}</h2>
               </Link>
            </Suspense>
         </div >
      </>
   );
}
