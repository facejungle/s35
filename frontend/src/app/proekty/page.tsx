import style from '@components/Projects/ui/style/card.module.css';
import { getProjects } from "@components/Projects"
import { getProjectsPage } from "@components/StaticPages"
import { getSeo } from "@components/index";
import { Metadata } from "next/types";
import Image from 'next/image';
import placeholderPic from '@public/images/480x300.png';
import { Suspense, use } from 'react';
import Loading from '../loading';
import Link from 'next/link';
import { ProjectPreview } from '@components/Projects';

export const dynamicParams = false;

export default function Projects({ searchParams }): React.ReactElement {
   const page = use(getProjects());
   return page.data.map((project: any) => {
      const projectCategory = project.attributes.category.data;
      const projectSlug = project.attributes.slug;
      const projectLink = projectCategory !== null ? `/proekty/${projectCategory.attributes.slug}/${projectSlug}` : `/proekty/no-category/${projectSlug}`;
      return (

         <div className={style.card}>
            {ProjectPreview(project.attributes)}
            <Suspense fallback={<Loading />}>
               <Link key={projectSlug} href={projectLink}>
                  <Image
                     src={placeholderPic}
                     alt="Picture of the author"
                     width={480}
                     height={300}
                  />
                  <h2>{project.attributes.title}</h2>
               </Link>
               <p>{project.attributes.description}</p>
            </Suspense>
         </div >
      );
   });
}

export async function generateMetadata(): Promise<Metadata> {
   const seo = await getProjectsPage();
   if (seo === null) {
      return {
         title: 'Проекты не найдены.',
         keywords: '404',
         description: 'Проектов не найдено',
      }
   }
   return getSeo(seo.data.attributes);
}