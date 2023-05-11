import Link from 'next/link';
import { ImagePlaceholder } from '@shared/index';

export const SiteLogo = (): React.ReactElement => {
   return (
      <>
         <Link key={'logo'} href='/'>
            <ImagePlaceholder size="logo" />
         </Link>
      </>
   );
}

