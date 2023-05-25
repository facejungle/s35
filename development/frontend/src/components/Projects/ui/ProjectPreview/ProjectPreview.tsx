import Link from "next/link";
import {TProjectData} from "../../index";
import style from './ProjectPreview.module.scss'
import {ImagePlaceholder, ImageStrapi} from "@shared/index";
import {getProjectLink} from "@components/Projects";

export function ProjectPreview(project: TProjectData['data']['attributes']): React.ReactNode {
    const projectLink = getProjectLink(project);
    return (
        <div className={style.project_card}>
            <Link key={project.slug} href={projectLink}>
                {project.seo.metaImage ? <ImageStrapi image={project.seo.metaImage.data} size="thumbnail"/> :
                    <ImagePlaceholder size={'thumbnail'}/>}
                <h2 className={style.project_title}>{project.seo.metaTitle}</h2>
            </Link>
        </div>
    );
}

export default ProjectPreview