import {getPortfolioPage} from "@components/StaticPages";
import style from '@components/StaticPages/style/portfolio.module.scss';

export default async function PagePortfolio(): Promise<React.ReactElement> {
    const page = await getPortfolioPage();

    return (
        <article className={style.contacts}>
            {page.data.attributes.title}
        </article>
    );
}

