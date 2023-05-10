import Link from 'next/link';
import { ImagePlaceholder } from '@/shared/helpers';

export const SiteLogo = (): React.ReactElement => {
   return (
      <>
         <Link key={'logo'} href='/'>
            <ImagePlaceholder size="logo" />
         </Link>
      </>
   );
}

