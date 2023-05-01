import Link from 'next/link'

export default function NotFound(): React.ReactElement {
   return (
      <>
         <h1>Not found – 404!</h1>
         <div>
            <Link href="/" replace>Dashboard</Link>
            <Link href="/">Go back to Home</Link>
         </div>
      </>
   );
}