"use client"
import { useLayoutEffect, useState } from "react";


export function CheckMobile() {
   const [isMobile, setIsMobile] = useState(true);
   useLayoutEffect(() => {
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
         document.body.classList.add('_touch');
         setIsMobile(true);
      } else {
         document.body.classList.add('_pc');
         setIsMobile(false);
      }
   }, []);
   return isMobile;
};

function CheckDevice({ children }: { children: React.ReactElement }) {
   CheckMobile();
   return (
      <>
         {children}
      </>
   )
}

export default CheckDevice