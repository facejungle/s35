import Link from 'next/link';
import {ImageDataType, ImagePlaceholder, ImageStrapi} from '@shared/index';

export function SiteLogo({image}: { image: ImageDataType }): React.ReactElement {
    if (!image) {
        return (
            <Link key={'logo'} href='/'>
                <ImagePlaceholder size={'logo'}/>
            </Link>
        )
    }
    ;
    return (
        <Link key={'logo'} href='/'>
            <ImageStrapi image={image} size={'logo'}/>
        </Link>
    );
}