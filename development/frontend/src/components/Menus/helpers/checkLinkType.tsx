import {StaticPageLinks} from "@/components/StaticPages"
import {TLinkData, TLink, TComponent} from "../model/type"
import {getProjectLink, getCategoryLink} from "@/components/Projects";
import {getPortfolioCategoryLink, getPortfolioLink} from "@/components/Portfolio";


export function checkLinkType(data: TComponent): TLink {
    if (data.__component === 'link.page-static') {
        const page = StaticPageLinks;
        if (data.link === 'front page') return {link: page.front, text: data.text}
        if (data.link === 'contacts') return {link: page.contacts, text: data.text}
        if (data.link === 'portfolio') return {link: page.portfolio, text: data.text}
        if (data.link === 'projects') return {link: page.projects, text: data.text}
        if (data.link === 'prices') return {link: page.prices, text: data.text}
        if (data.link === 'prices - building') return {link: page.prices_building, text: data.text}
        if (data.link === 'prices - services') return {link: page.prices_services, text: data.text}
        if (data.link === 'prices - delivery') return {link: page.prices_delivery, text: data.text}
        if (data.link === null) return {link: '/', text: data.text}
    }
    if (data.__component === 'link.page') {
        if (data.link) {
            if (data.link.parent) return {link: `/${data.link.parent.slug}/${data.link.slug}`, text: data.text};
            return {link: data.link.slug, text: data.text}
        }
    }
    if (data.__component === 'link.project') {
        if (data.link) {
            if (data.link.data.attributes.category) return {
                link: getProjectLink(data.link.data.attributes),
                text: data.text
            };
            return {link: data.link.data.attributes.slug, text: data.text}
        }
    }
    if (data.__component === 'link.project-category') {
        if (data.link) {
            if (data.link.data.attributes.slug) return {
                link: getCategoryLink(data.link.data.attributes),
                text: data.text
            };
            return {link: data.link.data.attributes.slug, text: data.text}
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
    throw new Error("checkLinkType() > unknown link type");
}











