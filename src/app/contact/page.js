import React from 'react'
import Link from 'next/link'
export default function Contact() {
    return (
        <div><h1>Contact Page</h1>
            <Link href="/" >Go to Home Page</Link>
        </div>
    )
}

/////// This is Dynamic Meta Data ////////

export function generateMetadata() {
    return {
        title: "Contact",
        description: "This is a Contact Page"
    }
}
