import Link from "next/link";
import { StaticPageLinks } from "@/components/StaticPages";
import { fetcher } from "@shared/index";

export async function MainMenu() {
   const mainMenuData = await fetcher({ host: 'api', path: 'mainMenu' });
   return (
      <>

      </>
   )
}
