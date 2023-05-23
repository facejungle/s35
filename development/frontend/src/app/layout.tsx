import {InterFont} from '@shared/style/fonts';
import '@shared/style/globals.scss';
import {SiteHeader} from "@widgets/SiteHeader/SiteHeader";
import {SiteFooter} from "@widgets/SiteFooter/SiteFooter";
import {getHeaderMenu} from "@components/Menus";
import {getContacts, getSiteSettings} from "@/shared";

export default async function RootLayout(props: {
    children: React.ReactNode;
    Sidebar: React.ReactNode;
}): Promise<React.ReactElement> {
    const HeaderMenu = await getHeaderMenu();
    const HeaderLogo = await getSiteSettings();
    const HeaderContacts = await getContacts();
    return (
        <html lang="ru" className={InterFont.className}>
        <body>
        <div className="site-wrapper flex-column">
            <SiteHeader menuData={HeaderMenu} imageData={HeaderLogo?.image} contactsData={HeaderContacts}/>
            <div className="main-wrapper">
                <main className="flex-row container">
                    {props.children}
                    {props.Sidebar}
                </main>
            </div>
            <SiteFooter/>
        </div>
        </body>
        </html>
    )
}