import Link from 'next/link'

export default function NotFound(): React.ReactElement {
   return (
      <div>
         <h1>Not found – 404!</h1>
         <Link href="/" replace>Dashboard</Link>
         <Link href="/">Go back to Home</Link>
      </div>

   );
}