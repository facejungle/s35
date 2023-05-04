import styles from './Content.module.css';
import ContentTitle from './blocks/Title';

type componentTitleType = {
   __component: 'content.title' | 'content.text';
   id: number,
   text: string,
   size: number,
   hashtag?: string
};

type componentType = {
   __component: 'content.title' | 'content.text';
   id: number,
   text?: string,
   size?: number,
   hashtag?: string
};

export default function ContentBlocks(contentData: any): React.ReactElement {
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
            contentData.map((block: componentTitleType) => {

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

