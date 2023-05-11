import { getCategories, getCategoryBySlug } from "@components/Projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: { category: string; } }): Promise<React.ReactElement> {
   const category = await getCategoryBySlug(params.category);

   if (!category) return notFound();
   return (
      <>
         {category.title}
      </>
   );
}

export async function generateStaticParams() {
   const categories = await getCategories();
   if (categories) {
      return categories.map(category => {
         return {
            category: category.slug === null ? 'no-category' : category.slug,
         }
      });
   }
   return notFound();
}
