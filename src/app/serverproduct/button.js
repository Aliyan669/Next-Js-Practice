'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
//////////  This is Client Component  /////////////

export default function Button({ price }) {
    return (
        <div>
            <button onClick={() => alert(`$${price}`)}>Check Price </button>
        </div>
    )
}
