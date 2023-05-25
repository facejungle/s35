import {TLinkData, TLink, TComponent} from "../model/type"
import {getProjectLink, getProjectCategoryLink} from "@/components/Projects";
import {getPortfolioCategoryLink, getPortfolioLink} from "@/components/Portfolio";
import {getDynamicPageLink} from "@components/DynamicPages/helpers/getLink";


export async function checkLinkType(data: TComponent): Promise<TLink> {
    if (data.__component === 'link.page') {
        if (data.link) {
            const currentLink = await getDynamicPageLink(data.link.data);
            return {link: currentLink, text: data.text};
        }
    }
    if (data.__component === 'link.project') {
        if (data.link) {
            const projectLink = getProjectLink(data.link.data);
            return {link: projectLink, text: data.text}
        }
    }
    if (data.__component === 'link.project-category') {
        if (data.link) {
            return {
                link: getProjectCategoryLink(data.link.data),
                text: data.text
            };
        }
    }
    if (data.__component === 'link.portfolio') {
        if (data.link) {
            if (data.link.category) return {link: getPortfolioLink(data.link), text: data.text};
            return {link: data.link.slug, text: data.text}
        }
    }
    if (data.__component === 'link.portfolio-category') {
        if (data.link) {
            if (data.link.slug) return {link: getPortfolioCategoryLink(data.link), text: data.text};
            return {link: data.link.slug, text: data.text}
        }
    }
    throw new Error("Menus > helpers > checkLinkType() > unknown link type");
}











