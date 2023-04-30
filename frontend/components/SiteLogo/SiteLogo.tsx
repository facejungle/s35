import Image from 'next/image';
import Link from 'next/link';
import { getSiteLogo } from '.';
import { strapiURL } from '@/shared/api/config';

const SiteLogo = async (): Promise<React.ReactElement> => {
   const logo = await getSiteLogo();
   const logoUrl = strapiURL(logo.url);
   return (
      <>
         <Link key={'logo'} href='/'>
            <Image
               src={logoUrl}
               priority={true}
               width={90}
               height={45}
               alt=""
            />
         </Link>
      </>
   );
}

export default SiteLogo
