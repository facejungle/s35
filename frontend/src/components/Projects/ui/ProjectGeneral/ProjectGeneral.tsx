import { MediaGallery } from '@/shared';
import style from './ProjectGeneral.module.css';
import { TProject } from '../../model/type';


export function ProjectGeneral({ project }: { project: TProject }) {
   return (
      <div className={`${style.project_general} flex-row`}>
         <MediaGallery images={project.gallery} />
         <div className={`${style.project_profile} flex-column`}>
            <div className={`${style.profile_area}`}></div>
            <div className={`${style.profile_length}`}></div>
            <div className={`${style.profile_width}`}></div>
            <div className={`${style.profile_height}`}></div>
            <div className={`${style.profile_gable}`}></div>
         </div>
      </div>
   )
}

export default ProjectGeneral