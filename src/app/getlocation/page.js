'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import Script from "next/script"

export default function page() {
  return (
    <div>
        <Script 
        src="/location.js"
        onLoad={()=>{
            console.log("File Loaded")
        }}
        />
        <h1>Get Geo Location in Next Js</h1>
    </div>
  )
}

