import React from 'react'
import Link from 'next/link'
{/* //////// Ye Dynamic Routing Hai /////////////// */ }
export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/aliyan" >Aliyan</Link>
                </li>
                <li>
                    <Link href="/studentlist/nihal" >Nihal</Link>
                </li>
                <li>
                    <Link href="/studentlist/ayan" >Ayan</Link>
                </li>
            </ul>
        </div>
    )
}
