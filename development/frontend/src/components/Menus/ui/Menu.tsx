import Link from 'next/link';
import {checkLinkType, TComponent} from "@components/Menus";

export function Menu({menuData}: { menuData: [TComponent] }): React.ReactElement {
    if (!menuData) {
        throw new Error(`[Menu] > menuData undefined`);
    }
    return (
        <>
            {
                menuData.map((element) => {
                    const menuLink = checkLinkType(element);
                    return <Link key={menuLink.text} href={menuLink.link}>{menuLink.text}</Link>
                })
            }
        </>
    );
}