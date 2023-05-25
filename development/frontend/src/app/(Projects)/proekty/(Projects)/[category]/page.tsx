import {getCategories, getProjectCategoriesLinks, getCategoryBySlug} from "@components/Projects";
import {notFound} from "next/navigation";

export default async function ProjectPage({params}: { params: { category: string; } }): Promise<React.ReactElement> {
    const category = await getCategoryBySlug(params.category);
    if (!category) return notFound();
    return (
        <>
            {category.data?.attributes.seo.metaTitle}
        </>
    );
}

export async function generateStaticParams() {
    const categories = await getCategories();
    if (categories) {
        return getProjectCategoriesLinks(categories.data);
    }
    return notFound();
}
