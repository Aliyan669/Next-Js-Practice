'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import React, { useState } from 'react'
import './style.css'

export default function page() {
    const [h3style, seth3style] = useState({ backgroundColor: "yellow" })
    return (
        <div>
            {/* <h1 style={{backgroundColor:'yellow',color:'DarkOrange'}}>Styling in Next Js</h1> //// Inline Css ////// */}
            <h3 style={h3style}>Styling in Next Js</h3>
            {/* <button onClick={() => seth3style({ backgroundColor: "lightblue" })} >Change Color</button> /// Update Style with UseState /////// */}
        </div>
    )
}
