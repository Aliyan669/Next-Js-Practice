'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import Link from 'next/link'
import './login.css'
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
    const pathName = usePathname();

    return (
        <div className='main'>
            {/* //////////////// Common Layout //////////// ye common layout hai jo sab pa show hoga */}
            
            {/* <ul className='login-layout'>
                <li>Collection Navbar</li>
                <li><Link className='link' href="/collection" >Collection Page</Link></li>
                <li><Link className='link' href="/collection/men" >Men Collection</Link></li>
                <li><Link className='link' href="/collection/women" >Women Collection</Link></li>
            </ul>
            {children} */}


            {/* //////////////// Conditional Layout //////////// ye Conditional layout hai agr kisi pe hide karna hoo esa karenga */}

            {
                pathName !== "/collection/women" ?
                    <ul className='login-layout'>
                        <li>Collection Navbar</li>
                        <li><Link className='link' href="/collection" >Collection Page</Link></li>
                        <li><Link className='link' href="/collection/men" >Men Collection</Link></li>
                        <li><Link className='link' href="/collection/women" >Women Collection</Link></li>
                    </ul> : null
            }
            {children}

        </div>
    )
}