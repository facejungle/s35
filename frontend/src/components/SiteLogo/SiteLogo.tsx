import Image from 'next/image';
import Link from 'next/link';
import placeholderPic from '@public/images/90x45.png';
import { getSiteLogo } from '.';
import { strapiURL } from '@shared/api/config';

const SiteLogo = async (): Promise<React.ReactElement> => {
   const logo = await getSiteLogo();
   const logoUrl = strapiURL(logo.url);
   return (
      <>
         <Link key={'logo'} href='/'>
            <Image
               src={placeholderPic}
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
