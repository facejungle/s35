import {TFetcherLink, getHost, getPath, paths} from '../index';

export async function fetcher(link: TFetcherLink): Promise<any> {
    let fetchHost: string = getHost(link.host);
    let fetchPath: string = getPath(link.path, link.slug, link.pagination, link.sort);
    try {
        const data = await fetch(fetchHost + fetchPath);
        if (!data.ok) {
            return undefined;
        }
        return await data.json();
    } catch (err) {
        throw new Error(`[${process.env.PROJECT_SLUG}][fetch fail] > ${link.host}/${link.path} > ` + err);
    }
}
