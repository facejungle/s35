import style from "./SiteHeader.module.css";
import { SiteLogo } from "@components/SiteLogo";
import { HeaderContacts } from "@components/Contacts";
import { HeaderMenu, ToggleMenu } from "@components/Menus";


export const SiteHeader = async (): Promise<React.ReactElement> => {
   return (
      <>
         <header className={`${style.site_header} flex-column container`}>
            <div className={`${style.header_line} flex-row`}>
               <div className={`${style.logo_contacts_wrapper} flex-row`}>
                  <div className={style.logo_wrapper}>
                     <SiteLogo />
                  </div>
                  <div className={style.contacts_wrapper}>
                     {await HeaderContacts()}
                  </div>
               </div>
               <div className={`${style.menu_wrapper} flex-row`}>
                  <div className={style.header_menu}>
                     {await HeaderMenu()}
                  </div>
                  <ToggleMenu />
               </div>
            </div>
            <div className={`${style.header_line} flex-row`}>
               <div className={style.menu_wrapper}>

               </div>
               <div className={style.social_wrapper}>
                  social icons
               </div>
            </div>
         </header>
      </>
   );
}
