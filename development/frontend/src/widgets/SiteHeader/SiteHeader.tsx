'use client'
import style from "./SiteHeader.module.scss";
import {Menu, TComponent, ToggleMenu} from "@components/Menus";
import {useEffect, useRef} from "react";
import {Contacts, TContactsData, TImageData, ImageStrapi, ImagePlaceholder} from "@shared/index";
import Link from "next/link";


export function SiteHeader({menuData, imageData, contactsData}: {
    menuData: [TComponent],
    imageData: TImageData["data"] | undefined,
    contactsData: TContactsData
}): React.ReactElement {
    const headerRef = useRef<HTMLDivElement>(null);
    const isSticky = () => {
        const header = headerRef.current;
        if (header) window.scrollY >= 1 ? header.classList.add(style.is_sticky) : header.classList.remove(style.is_sticky);
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, [headerRef]);

    return (
        <header ref={headerRef} id={'site_header'} className={`${style.site_header} flex-column container`}>
            <div className={`${style.header_line} flex-row`}>
                <div className={`${style.logo_contacts_wrapper} flex-row`}>
                    <div className={style.logo_wrapper}>
                        <Link key={'logo'} href='/'>
                            {imageData ? <ImageStrapi image={imageData} size={'logo'}/> :
                                <ImagePlaceholder size={'logo'}/>}
                        </Link>
                    </div>
                    <div className={`${style.contacts_wrapper} flex-column`}>
                        {contactsData ? <Contacts contactsData={contactsData} isDefault={true}/> : <>Contacts data
                            undefined</>}
                    </div>
                </div>
                <div className={`${style.menu_wrapper} flex-row`}>
                    <div className={style.header_menu}>
                        {menuData ? <Menu menuData={menuData}/> : <>HeaderMenu</>}
                    </div>
                    <ToggleMenu/>
                </div>
            </div>
            <div className={`${style.header_line} flex-row`}>
                <div className={style.social_wrapper}>
                    social icons
                </div>
                <div className={style.ss}>
                    ss
                </div>
            </div>
        </header>
    );
}
