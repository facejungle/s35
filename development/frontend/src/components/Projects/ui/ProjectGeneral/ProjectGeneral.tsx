import { MediaGallery } from '@/shared';
import style from './ProjectGeneral.module.scss';
import { TProject, ProjectSettingsData, TProjectProfile } from '../../model/type';

import { Locale } from "@/shared/i18n/i18n";
import { getDictionary } from "@/shared/i18n/getDictionary";
import { use } from 'react';

export function ProjectGeneral({ project, settings, lang }: { project: TProject, settings: ProjectSettingsData, lang?: Locale }) {
   const dict = use(getDictionary(lang || 'ru'));
   return (
      <div className={`${style.project_general} flex-row`}>
         <MediaGallery images={project.gallery} />
         <div className={`${style.project_profile} flex-column`}>
            <div className={`${style.profile_area} ${style.profile_child}`}>
               <div className={style.profile_child__inner}>
                  <p className={style.number}>{project.totalArea} / {project.livingArea} м²</p>
                  <p className={style.desc}>{settings.totalAreaText}</p>
               </div>
            </div>
            <div className={`${style.profile_length} ${style.profile_child}`}>
               <div className={style.profile_child__inner}>
                  <p className={style.number}>{project.profile.length} x {project.profile.width}</p>
                  <p className={style.desc}>{settings.lengthText} / {settings.widthText}</p>
               </div>
            </div>
            <div className={`${style.profile_height} ${style.profile_child}`}>
               <div className={style.profile_child__inner}>
                  <p className={style.number}>{project.profile.height} / {project.profile.gable}</p>
                  <p className={`${style.desc} tooltip`} data-tooltip="Высота от фундамента до  фронтона / Высота фронтона">{dict.projects.profile.height} / {dict.projects.profile.gable}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectGeneral