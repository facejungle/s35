import { getCategories, getCategoryBySlug } from "@shared/api/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: { category: string; } }): Promise<React.ReactElement> {
   const category = await getCategoryBySlug(params.category);
   if (!category) {
      return notFound();
   }
   return (
      <>
         {category.title}
      </>
   );
}

export async function generateStaticParams() {
   const categories = await getCategories();
   if (categories !== null) {
      return categories.map((category: { slug: string; }) => {
         return [{
            category: category.slug === null ? 'no-category' : category.slug,
         }]
      });
   }
   return notFound();
}
