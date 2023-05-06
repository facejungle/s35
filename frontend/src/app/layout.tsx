import { Metadata } from "next/types";
import '@shared/styles/reset.css'
import '@shared/styles/globals.css'
import { montserrat } from "@shared/styles/fonts";
import CheckDevice from '@components/checkDevice';
import SiteHeader from '@widgets/Header/Header';
import SiteFooter from '@widgets/Footer/Footer';
import { getSiteSettingsData } from "@/components";
export const dynamicParams = false;
export const revalidate = 60;


export default async function RootLayout({ children }: { children: React.ReactElement }) {
   return (
      <html lang="ru" className={montserrat.className}>
         <body>
            <CheckDevice>
               <div className="site-wrapper flex-column">
                  {await SiteHeader()}
                  <div className="main-wrapper">
                     <main className="flex-row container">
                        {children}
                     </main>
                  </div>
                  <SiteFooter />
               </div>
            </CheckDevice>
         </body>
      </html>
   )
}

export async function generateMetadata(): Promise<Metadata> {
   const seo = await getSiteSettingsData();

   if (seo === null) {
      return {
         title: 'Не найдено!',
         keywords: '404',
         description: 'Страница не найдена',
      }
   }
   const titleTemplate = seo !== null ? `%s | ${seo.data.attributes.title}` : 's35 app'
   const absoluteTemplate = seo !== null ? seo.data.attributes.title : 's35 app'
   return {
      title: {
         template: titleTemplate,
         absolute: absoluteTemplate,
         default: 'not'
      },
      keywords: seo !== null ? seo.data.attributes.keywords : 's35 app',
      description: seo !== null ? seo.data.attributes.description : 's35 app',
   };
}