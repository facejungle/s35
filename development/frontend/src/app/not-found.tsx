'use client'
import Link from 'next/link'

export default function NotFound(): React.ReactElement {
    return (
        <>
            <h2>Not Found</h2>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <p>Could not find requested resource</p>
        </>
    );
}