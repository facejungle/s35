export const StaticPageLinks = {
   front: '/',
   contacts: `/${process.env.CONTACTS_URI || 'contacts'}`,
   portfolio: `/${process.env.PORTFOLIO_URI || 'portfolio'}`,
   prices: `/${process.env.PRICES_URI || 'prices'}`,
   prices_building: `/${process.env.PRICES_URI || 'prices'}/${process.env.PRICES_BUILDING_URI || 'building'}`,
   prices_services: `/${process.env.PRICES_URI || 'prices'}/${process.env.PRICES_SERVICE_URI || 'services'}`,
   prices_delivery: `/${process.env.PRICES_URI || 'prices'}/${process.env.PROJECTS_URI || 'delivery'}`,
   projects: `/${process.env.PROJECTS_URI || 'delivery'}`,
}