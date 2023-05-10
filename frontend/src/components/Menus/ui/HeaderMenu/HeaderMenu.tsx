import { getHeaderMenu } from "../../";
import Link from 'next/link';


export async function HeaderMenu(): Promise<React.ReactElement> {
   const menuLinks = await getHeaderMenu();
   if (menuLinks) {
      return menuLinks.map((element: any) => {
         return <Link key={element.text} href={element.link}>{element.text}</Link>
      })
   }
   return <></>
}