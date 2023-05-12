import { ProjectSettingsData, TProjectProfile } from "../../model/type";
import style from "./ProjectProfile.module.css";

export function ProjectProfile({ profile, projectSettings }: { profile: TProjectProfile, projectSettings: ProjectSettingsData | undefined }) {
   return (
      <div className={`${style.divTable} ${style.project_profile}`}>
         <div className={style.divTableBody}>
            <div className={style.divTableRow}>
               <div className={style.divTableCell}>{projectSettings?.lengthText || 'Length:'}</div>
               <div className={style.divTableCell}>{profile.length}</div>
            </div>
            <div className={style.divTableRow}>
               <div className={style.divTableCell}>{projectSettings?.widthText || 'Width:'}</div>
               <div className={style.divTableCell}>{profile.width}</div>
            </div>
            <div className={style.divTableRow}>
               <div className={style.divTableCell}>{projectSettings?.heightText || 'Height:'}</div>
               <div className={style.divTableCell}>{profile.height}</div>
            </div>
            <div className={style.divTableRow}>
               <div className={style.divTableCell}>{projectSettings?.gableText || 'Gable:'}</div>
               <div className={style.divTableCell}>{profile.gable}</div>
            </div>
         </div>
      </div>
   )
}

export default ProjectProfile