import Link from "next/link";
import {TProjectData} from "../../index";
import style from './ProjectPreview.module.scss'
import {ImagePlaceholder, ImageStrapi} from "@shared/index";
import {getProjectLink} from "@components/Projects";

export function ProjectPreview(project: TProjectData['data']): React.ReactNode {
    if (!project) return <>Project data undefined</>;
    const projectLink = getProjectLink(project);
    return (
        <div className={style.project_card}>
            <Link key={project.attributes.slug} href={projectLink}>
                {project.attributes.seo.metaImage ?
                    <ImageStrapi image={project.attributes.seo.metaImage.data} size="thumbnail"/> :
                    <ImagePlaceholder size={'thumbnail'}/>}
                <h2 className={style.project_title}>{project.attributes.seo.metaTitle}</h2>
            </Link>
        </div>
    );
}

export default ProjectPreview