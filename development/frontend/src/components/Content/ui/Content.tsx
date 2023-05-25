import {ContentTitle} from './segment/Title';
import {ContentDataType} from '../model/type';
import {ImageStrapi, MediaGallery} from "@/shared";

export function Content(contentData: ContentDataType): React.ReactElement[] {
    return contentData.map((segment) => {
        if (segment.__component === 'content.title') return <ContentTitle title={segment}/>;
        if (segment.__component === 'content.text') return <p key={segment.id + '_text'}>{segment.text}</p>;
        if (segment.__component === 'content.image') return <ImageStrapi image={segment.image.data} size={'preview'}/>
        if (segment.__component === 'content.gallery') return <MediaGallery images={segment.gallery}/>
        return <>{segment.__component}<br/></>
    });
}

