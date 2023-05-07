type linkType = {
   __component: string | 'link.page-static';
   slug: 'front page' | 'contacts' | 'portfolio' | 'projects' | 'prices' | 'prices - house' | 'prices - service' | 'prices - delivery';
   text: string;
   link: {
      data: {
         attributes: {
            slug: string;
            parent: {
               data: {
                  attributes: {
                     slug: string;
                  }
               }
            }
         }
      }
   };
}
export function checkLinkType(link: linkType) {
   if (link.__component === 'link.page-static') {
      if (link.slug === 'front page') return { linkUrl: '/', linkText: link.text }
      if (link.slug === 'contacts') return { linkUrl: '/kontakty', linkText: link.text }
      if (link.slug === 'portfolio') return { linkUrl: '/portfolio', linkText: link.text }
      if (link.slug === 'projects') return { linkUrl: '/proekty', linkText: link.text }
      if (link.slug === 'prices') return { linkUrl: '/tseny', linkText: link.text }
      if (link.slug === 'prices - house') return { linkUrl: '/tseny/doma-bani', linkText: link.text }
      if (link.slug === 'prices - service') return { linkUrl: '/tseny/uslugi', linkText: link.text }
      if (link.slug === 'prices - delivery') return { linkUrl: '/tseny/dostavka', linkText: link.text }
   }
   let linkUrl = '';
   if (link.link.data !== null) {
      const linkParent = link.link.data.attributes.parent.data
      linkUrl = linkParent ? `/${linkParent.attributes.slug}/${link.link.data.attributes.slug}` : `/${link.link.data.attributes.slug}`;
   }
   return {
      linkUrl: linkUrl,
      linkText: link.text
   }
}