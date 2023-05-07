import styles from './Content.module.css';
import ContentTitle from './segment/Title';
import { contentType } from '../model/type';

export function Content(contentData: [contentType] | []): React.ReactElement {
   if (!contentData[0]) {
      console.log(`>>> content data - not found (/content.tsx)`)
      return (
         <>
            <p>Really? Content not found...</p>
         </>
      );
   }
   return (
      <>
         {
            contentData.map((block) => {

               if (block.__component === 'content.title') {
                  return (
                     <ContentTitle key={block.id + '_title'} text={block.text} size={block.size} />
                  );
               }
               if (block.__component === 'content.text') {
                  return (
                     <p key={block.id + '_text'}>{block.text}</p>
                  );
               }
            })
         }
      </>
   );
}

