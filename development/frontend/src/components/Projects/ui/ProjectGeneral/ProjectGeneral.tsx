import {MediaGallery} from '@shared/index';
import style from './ProjectGeneral.module.scss';
import {TDProject} from '@components/Projects/model/type';
import dictionary from '@shared/dictionary.json';

export function ProjectGeneral({project}: { project: TDProject }): React.ReactElement {
    const dict = dictionary.components.projects.ProjectGeneral;
    return (
        <div className={`${style.project_general} flex-row`}>
            {project.gallery ? <MediaGallery images={project.gallery}/> : undefined}
            <div className={`${style.project_profile} flex-column`}>
                <div className={`${style.profile_area} ${style.profile_child}`}>
                    <div className={style.profile_child__inner}>
                        <p className={style.number}>{project.totalArea} / {project.livingArea} м²</p>
                        <p className={`${style.desc} tooltip`}
                           data-tooltip={`${dict.profile.totalArea} / ${dict.profile.livingArea}`}>
                            {dict.profile.Area}
                        </p>
                    </div>
                </div>
                <div className={`${style.profile_length} ${style.profile_child}`}>
                    <div className={style.profile_child__inner}>
                        <p className={style.number}>
                            {project.profile.length} x {project.profile.width}
                        </p>
                        <p className={style.desc}>
                            {dict.profile.length} / {dict.profile.width}
                        </p>
                    </div>
                </div>
                <div className={`${style.profile_height} ${style.profile_child}`}>
                    <div className={style.profile_child__inner}>
                        <p className={style.number}>{project.profile.height} / {project.profile.gable}</p>
                        <p className={style.desc}>{dict.profile.height} / {dict.profile.gable}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}