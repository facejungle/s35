import styles from './Content.module.css';
import { ContentTitle } from './segment/Title';
import { ContentImage } from './segment/Image';
import { ContentDataType } from '../model/type';

export function Content(contentData: ContentDataType): React.ReactElement {
   return (
      <>
         {
            contentData.map((segment) => {
               if (segment.__component === 'content.title') return <ContentTitle title={segment} />;
               if (segment.__component === 'content.text') return <p key={segment.id + '_text'}>{segment.text}</p>;
               if (segment.__component === 'content.image') return <ContentImage image={segment} />;
            })
         }
      </>
   );
}

