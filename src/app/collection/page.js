'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Collection() {
    const router = useRouter();
    const Navigate = (page) => {
        router.push("/collection/" + page)
    }

    return (
        <div><h1>Collection Page</h1>
            {/* <Link href="/collection/men" >Men Collection</Link><br />
            <Link href="/collection/women" >Women Collection</Link><br /> */}
            <button onClick={() => Navigate("men")}>Men Collection</button><br />
            <button onClick={() => Navigate("women")}>Women Collection</button><br />
            <Link href="/" >Go to Home Page</Link>
        </div>
    )
}
