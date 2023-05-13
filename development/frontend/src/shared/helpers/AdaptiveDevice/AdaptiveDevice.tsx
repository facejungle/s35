"use client"
import { useLayoutEffect } from "react";

export function AdaptiveDevice({ children }: { children: React.ReactElement }): React.ReactElement {
   useLayoutEffect(() => {
      if (!navigator.language.includes('ru')) {
         document.documentElement.lang = 'en'
      }
      if (checkIsMobile()) {
         document.body.classList.add('_touch');
      }
   });

   return (
      <>
         {children}
      </>
   )
}

export function checkIsMobile() {
   let Mobile = {
      Android: () => {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: () => {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: () => {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: () => {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: () => {
         return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: () => {
         return (Mobile.Android() || Mobile.BlackBerry() || Mobile.iOS() || Mobile.Opera() || Mobile.Windows());
      }
   };
   if (Mobile.any()) {
      return true;
   } else {
      return false;
   }
};

export default AdaptiveDevice