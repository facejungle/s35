import Link from "next/link";
import {TDProject} from "../../index";
import style from './ProjectPreview.module.scss'
import {ImagePlaceholder, ImageStrapi} from "@shared/index";
import {getProjectLink} from "@components/Projects";

export function ProjectPreview(project: TDProject): React.ReactNode {
    const projectLink = getProjectLink(project);
    return (
        <div className={style.project_card}>
            <Link key={project.slug} href={projectLink}>
                {project.image ? <ImageStrapi image={project.image} size="thumbnail"/> :
                    <ImagePlaceholder size={'thumbnail'}/>}
                <h2 className={style.project_title}>{project.title}</h2>
            </Link>
        </div>
    );
}

export default ProjectPreview