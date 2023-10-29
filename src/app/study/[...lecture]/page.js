'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
{/* //////// Ye All Catch Segement Routing Hai /////////////// */ }

export default function Lecture({ params }) {
    return (
        <div>
            <h1>Day of College: {params.lecture[0]}</h1>
            <h1>Lecture No: {params.lecture[1]}</h1>
        </div>
    )
}
