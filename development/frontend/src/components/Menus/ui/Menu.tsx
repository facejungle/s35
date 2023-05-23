import Link from 'next/link';
import {checkLinkType, TLinkData} from "@components/Menus";

export function Menu({menuData}: { menuData: TLinkData[] }): React.ReactElement {
    if (!menuData) {
        throw new Error(`[Menu] > menuData undefined`);
    }
    return (
        <>
            {
                menuData.map((element: any) => {
                    const menuLink = checkLinkType(element);
                    return <Link key={menuLink.text} href={menuLink.link}>{menuLink.text}</Link>
                })
            }
        </>
    );
}