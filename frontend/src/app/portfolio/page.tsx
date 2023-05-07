import { Sidebar } from "@widgets/index";
import { getPortfolioPage } from "@components/StaticPages";
import style from '@components/StaticPages/ui/style/portfolio.module.css';

export default async function PagePortfolio(): Promise<React.ReactElement> {
   const page = await getPortfolioPage();

   return (
      <>
         <article className={style.contacts}>
            {page.data.attributes.title}
         </article>
         <Sidebar />
      </>
   );
}

