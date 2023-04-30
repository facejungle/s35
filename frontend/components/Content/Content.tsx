import styles from './Content.module.css';

type contentType = [
   {
      __component: string;
      title: string;
      text: string;
   }
];

export default function content(data: contentType): React.ReactNode {
   if (!data[0]) {
      console.log(`>>> content data - not found (/content.tsx)`)
      return (
         <>
            content data - not found (/content.tsx)
         </>
      );
   }
   return (
      <div className={`${styles.content_wrapper} flex-column`}>
         {
            data.map((component: any) => {
               if (component.__component === 'content.title') {
                  if (component.title) {
                     return (
                        <h2 key={component.__component + component.id} className={styles.title}>
                           {component.title}
                        </h2>
                     );
                  }
               }
               if (component.__component === 'content.text') {
                  if (component.text) {
                     return (
                        <p key={component.__component + component.id} className={styles.text}>
                           {component.text}
                        </p>
                     );
                  }
               }
            })
         }
      </div >
   );
}

