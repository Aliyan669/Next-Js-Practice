'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [name, setName] = useState("Aliyan")
  
  const apple = (item) => {
    // alert(item)
    setName("Amir")
  }
  const router = useRouter();
  const Navigate = (routeName) => {
    router.push(routeName)
  }

  return (
    <main >
      <h1>Home Page</h1>
      {/* <Sequence  name="Aliyan"/> */}
      {/*   
  <h1>Events, Function & State</h1>
  <h2>My Name is {name}</h2>
  <button onClick={()=>apple()}>Click Here</button> */}
      {/* <Link href={"/about"} >About Page</Link> <br />
      <Link href={"/contact"} >Contact Page</Link> */}
       
       <button onClick={() => Navigate("/collection")}>Go to Collection Page</button><br /><br />
       <button onClick={() => Navigate("/contact")}>Go to Contact Page</button>
    </main>
  )
}

// const Sequence = (props) => {
//   return(
//      <div>
//       <h1>My Name is {props.name}</h1>
//      </div>
// )}