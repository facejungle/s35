import Link from 'next/link';
import {checkLinkType, TComponent} from "@components/Menus";

export function Menu({menuData}: { menuData: [TComponent] }): React.ReactElement {
    const menu = menuData.map(async (element) => {
        const menuLink = await checkLinkType(element);
        return <Link key={menuLink.text} href={menuLink.link}>{menuLink.text}</Link>
    });
    return <>{menu}</>;
}