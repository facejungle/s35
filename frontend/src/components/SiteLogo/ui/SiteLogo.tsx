import Image from 'next/image';
import Link from 'next/link';
import placeholderPic from '@public/images/90x45.png';

export const SiteLogo = (): React.ReactElement => {
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

