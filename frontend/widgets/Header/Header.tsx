import style from "./Header.module.css";
import SiteLogo from "@components/SiteLogo/SiteLogo";
import HeaderContacts from "@components/Contacts/Contacts";
import HeaderMenu from "@components/HeaderMenu/HeaderMenu";
import ToggleMenu from "@components/ToggleMenu/ToggleMenu";


const SiteHeader = async (): Promise<React.ReactElement> => {
   return (
      <>
         <header className={`${style.site_header} flex-column container`}>
            <div className={`${style.header_line} flex-row`}>
               <div className={`${style.logo_contacts_wrapper} flex-row`}>
                  <div className={style.logo_wrapper}>
                     {await SiteLogo()}
                  </div>
                  <div className={style.contacts_wrapper}>
                     {await HeaderContacts()}
                  </div>
               </div>
               <div className={`${style.menu_wrapper} flex-row`}>
                  <div className={style.header_menu}>
                     <HeaderMenu />
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

export default SiteHeader;
