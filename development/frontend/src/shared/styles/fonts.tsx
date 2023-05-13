import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const InterFont = Inter({
   variable: '--font_inter',
   weight: ['300', '400', '500', '600', '700', '800'],
   style: ['normal'],
   subsets: ['cyrillic'],
   display: 'swap',
})

const InterFontLocal = localFont({
   src: './fonts/Inter.ttf'
});

export { InterFont, InterFontLocal };