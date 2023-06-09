import {TPaginationUrl, TPathNames, paths, TSortUrl} from "../index";


export function getPath(path: TPathNames, slug?: string, pagination?: TPaginationUrl, sort?: TSortUrl) {
    let fetchPath = '';

    if (path === 'SETTINGS') fetchPath = paths.SETTINGS.valueOf();
    if (path === 'CONTACTS') fetchPath = paths.CONTACTS.valueOf();

    if (path === 'MENU_HEADER') fetchPath = paths.MENU_HEADER.valueOf();
    if (path === 'MENU_MAIN') fetchPath = paths.MENU_MAIN.valueOf();

    if (path === 'PAGES') fetchPath = paths.PAGES.valueOf();
    if (path === 'PAGE_BY_SLUG') fetchPath = paths.PAGE_BY_SLUG.valueOf();

    if (path === 'PAGE_FRONT') fetchPath = paths.PAGE_FRONT.valueOf();
    if (path === 'PAGE_CONTACTS') fetchPath = paths.PAGE_CONTACTS.valueOf();
    if (path === 'PAGE_PRICES') fetchPath = paths.PAGE_PRICES.valueOf();
    if (path === 'PAGE_PORTFOLIO') fetchPath = paths.PAGE_PORTFOLIO.valueOf();
    if (path === 'PAGE_PROJECTS') fetchPath = paths.PAGE_PROJECTS.valueOf();

    if (path === 'PROJECTS') fetchPath = paths.PROJECTS.valueOf();
    if (path === 'PROJECTS_CATEGORIES') fetchPath = paths.PROJECTS_CATEGORIES.valueOf();
    if (path === 'PROJECT_BY_SLUG') fetchPath = paths.PROJECT_BY_SLUG.valueOf();
    if (path === 'PROJECT_CATEGORY_BY_SLUG') fetchPath = paths.PROJECT_CATEGORY_BY_SLUG.valueOf();

    if (slug) {
        fetchPath = fetchPath.replace('%slug%', slug);
    }

    if (pagination) {
        fetchPath = fetchPath + `&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`;
    }

    if (sort) {
        let direction = '%3Aasc';
        if (sort.direction === 'desc') direction = '%3Adesc'
        fetchPath = fetchPath + `&sort=${sort.fieldName}` + direction;
    }

    return fetchPath;
}