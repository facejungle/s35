import Sidebar from "@/widgets/Sidebar/Sidebar";
import { getPortfolioPage } from "@/shared/api/pages";
import style from '@shared/styles/pages/portfolio.module.css';

export default async function PagePortfolio(): Promise<React.ReactElement> {
   const page = await getPortfolioPage();

   return (
      <>
         <article className={style.contacts}>

         </article>
         <Sidebar />
      </>
   );
}

export async function generateStaticParams() {
   const portfolioPage = await getPortfolioPage();
   if (portfolioPage !== null) {
      return [{
         portfolio: portfolioPage.data.attributes.slug === null ? 'portfolio' : portfolioPage.data.attributes.slug,
      }]
   }
   return [{ portfolio: 'portfolio' }];
}
