import { getHeaderMenu } from "@shared/api/menus";
import Link from 'next/link';


export async function HeaderMenu(): Promise<React.ReactElement> {
   const menuLinks = await getHeaderMenu();
   if (menuLinks) {
      return menuLinks.map((element: any) => {
         return <Link key={element.linkText} href={element.linkUrl}>{element.linkText}</Link>
      })
   }
   return <></>
}