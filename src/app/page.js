'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
import { useState } from 'react'
// import styles from './page.module.css'
import Link from 'next/link'
import outside from '@/app/styles/outside.module.css'
import other from '@/app/styles/other.module.css'
import style from './style.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import vercimg from '../../public/vercel.svg'
import { Roboto } from 'next/font/google'     ///////// Font Optimization ///////////
import { API_BASE_URL } from './config/constant'

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {

  console.log(process.env.NODE_ENV)
  console.log(process.env.SERVER_PASSWORD)
  console.log(process.env.DB_PASSWORD)

  const [name, setName] = useState("Aliyan")
  const [color, setColor] = useState("green")
  const { red } = style;
  const { green } = style;


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
      {/* <h1 className={outside.main}>This is a Module Css</h1>
      <h1 id={other.main}>This is a Module Css 2</h1> */}
      {/* <h1 className={color=='red'?style.red:style.green}>This is a Conditional Css</h1>
      <h1 style={{backgroundColor:color=='red'?'red':'green'}}>This is a Conditional Css</h1> */}
      {/* <h1 className={red}>This is a Text</h1>
      <h1 className={green}>This is a Text</h1> */}

      {/* /////////////// Image Optimization /////////// */}
      {/* <h1>Image Optimization in Next Js</h1> */}

      {/* <Image src={vercimg} /> */}
      {/* <img  src={vercimg.src}/> */}
      {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
        width={800}
        height={800}
      /> */}

      {/* /////////////// Font Optimization /////////// */}
      {/* <h1>Font Optimization in Next Js</h1>
      <h1 className={roboto.className}>FONT WITH NEXT JS FONT FEATURE</h1> */}
      {/* <img src='dummy.png' /> */}

      {/* <h1>Redirection in Next Js</h1> */}

      {/* <h1>Environment Variable in Next Js</h1>
      {
        process.env.NODE_ENV == "development" ?
          <h1>You are in Development Mode</h1> :
          <h1>You are in Production Mode</h1>

      } */}

    </main>

  )
}

// const Sequence = (props) => {
//   return(
//      <div>
//       <h1>My Name is {props.name}</h1>
//      </div>
// )}

