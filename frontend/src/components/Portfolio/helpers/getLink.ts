import { PortfolioDataType, PortfolioCategoryDataType, PortfolioCategoryType } from '../model/type';

export const portfolioFolder = process.env.PORTFOLIO_URI || 'portfolio';
export const portfolioNoCategory: PortfolioCategoryType = {
   title: process.env.PORTFOLIO_NO_CATEGORY_TITLE || 'Other',
   slug: process.env.PORTFOLIO_NO_CATEGORY_SLUG || 'no-category',
   description: process.env.PORTFOLIO_NO_CATEGORY_DESCRIPTION || 'other',
   link: `/${portfolioFolder}/${process.env.PORTFOLIO_NO_CATEGORY_SLUG || 'no-category'}`,
   image: null
};

export function getPortfolioCategoryLink(data: PortfolioCategoryDataType): string {
   const category = data;
   const categoryLink = !category ? portfolioNoCategory.slug : category.slug;
   return `/${portfolioFolder}/${categoryLink}`;
}

export function getPortfolioCategoriesLinks(data: PortfolioCategoryDataType[]): object[] {
   const portfolioData = data;
   if (portfolioData !== null) {
      return portfolioData.map(category => {
         return { category: category.slug };
      });
   }
   throw new Error("getPortfolioCategoriesLinks() > portfolio data is null");
}

export function getPortfolioLink(data: PortfolioDataType): string {
   if (data) {
      const portfolio = data;
      const portfolioCategory = portfolio.category;
      const portfolioLink = portfolio.slug;
      const categoryLink = !portfolioCategory ? portfolioNoCategory.slug : portfolioCategory.slug;
      return `/${portfolioFolder}/${categoryLink}/${portfolioLink}`;
   }
   throw new Error("getPortfolioLink() > portfolio data is null");
}

export function getPortfolioLinks(data: PortfolioDataType[]): object[] {
   const portfolioData = data;
   if (portfolioData !== null) {
      return portfolioData.map(portfolio => {
         const portfolioCategory = portfolio.category;
         const portfolioLink = portfolio.slug;
         const categoryLink = !portfolioCategory ? portfolioNoCategory.slug : portfolioCategory.slug;
         return {
            category: categoryLink,
            portfolio: portfolioLink,
         };
      });
   }
   throw new Error("getPortfolioLinks() > portfolio data is null");
}