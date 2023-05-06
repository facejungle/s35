import Sidebar from "@widgets/Sidebar/Sidebar";
import { getPortfolioPage } from "@shared/api/pages";
import style from '@shared/styles/pages/portfolio.module.css';

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

