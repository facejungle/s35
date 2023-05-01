"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import style from './HeaderMenu.module.css';
import { useRouter } from 'next/navigation';

export default function HeaderMenu() {
   const [selectedButton, setSelectedButton] = useState(-1);
   const links = [
      {
         text: 'Главная страница',
         link: '/',
         slug: 'frontpage',
         widthHidden: 1120,
      },
      {
         text: 'Цены',
         link: '/tseny',
         slug: 'tseny',
         widthHidden: 720,
      },
      {
         text: 'Проекты',
         link: '/proekty',
         slug: 'proekty',
         widthHidden: 720,
      },
      {
         text: 'Проекты',
         link: '/proekty',
         slug: 'proekty',
         widthHidden: 1120,
      }
   ];
   const [menuLinks, setMenuLinks] = useState(links);

   function handleButtonClick(buttonIndex: number) {
      const arrayButtons = document.querySelectorAll(`[data-path="${window.location.pathname}"]`);
      if (arrayButtons) {
         arrayButtons.forEach(button => {
            button.classList.remove(style.active);
         });
      }
      setSelectedButton(buttonIndex);
   };

   function headerMenuLinks() {
      if (menuLinks && Array.isArray(menuLinks)) {
         return (
            menuLinks.map((link, index) => {
               return (
                  <button
                     key={link.slug + index}
                     className={`${style.menu_link} ${selectedButton === index ? style.active : ''}`}

                     id={link.slug}
                     data-path={link.link}
                     onClick={() => { handleButtonClick(index) }}
                  >
                     <Link href={link.link}>
                        {link.text}
                     </Link>
                  </button>
               );
            })
         );
      }
   }
   return (
      <>
         {
            headerMenuLinks()
         }
      </>
   );
}