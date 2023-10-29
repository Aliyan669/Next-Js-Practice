'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
{/* //////// Ye Dynamic Routing Hai /////////////// */ }

export default function StudentName({ params }) {
  // console.log(params)
  return (
    <div>
      <h1>Student Name</h1>
      <h1>Name: {params.student}</h1>
    </div>
  )
}
