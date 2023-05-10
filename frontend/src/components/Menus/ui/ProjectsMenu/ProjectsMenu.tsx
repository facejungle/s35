import { getCategories } from "@/components/Projects"
import Link from "next/link";
import { use } from "react";

export function ProjectsMenu(): React.ReactElement {
   const categories = use(getCategories());
   return (
      <>
         {
            categories.map(category => {
               return (
                  <>
                     <Link key={category.slug} href={category.link}>{category.title}</Link>
                  </>
               );
            })
         }
      </>
   );
}