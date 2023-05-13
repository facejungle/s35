import { Metadata } from "next/types";
import '@shared/styles/reset.css'
import '@shared/styles/globals.css'
import { InterFont } from "@shared/styles/fonts";
import { AdaptiveDevice } from '@shared/index';
import { SiteHeader } from '@widgets/index';
import { SiteFooter } from '@/widgets/index';
import { use } from "react";
export const dynamicParams = false;
export const revalidate = 60;


export default function RootLayout({ children, }: { children: React.ReactElement }) {
   return (
      <html lang="ru" className={InterFont.className}>
         <body>
            <AdaptiveDevice>
               <div className="site-wrapper flex-column">
                  {use(SiteHeader())}
                  <div className="main-wrapper">
                     <main className="flex-row container">

                        {children}

                     </main>
                  </div>
                  <SiteFooter />
               </div>
            </AdaptiveDevice>
         </body>
      </html>
   )
}

// export async function generateMetadata(): Promise<Metadata> {
//    const seo = await getSiteSettingsData();

//    if (!seo) {
//       return {
//          title: 'Не найдено!',
//          keywords: '404',
//          description: 'Страница не найдена',
//       }
//    }
//    const titleTemplate = seo !== null ? `%s | ${seo.data.attributes.title}` : 's35 app'
//    const absoluteTemplate = seo !== null ? seo.data.attributes.title : 's35 app'
//    return {
//       title: {
//          template: titleTemplate,
//          absolute: absoluteTemplate,
//          default: 'not'
//       },
//       keywords: seo !== null ? seo.data.attributes.keywords : 's35 app',
//       description: seo !== null ? seo.data.attributes.description : 's35 app',
//    };
// }