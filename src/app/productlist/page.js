'use client'  ///   Jab koi event call karta hai isko add karta hai sabsa top pa    ///
//////////  Fetch Api Data in Client Components /////////////

import { useState, useEffect } from 'react';

export default function Page() {

    const [product, setProduct] = useState([]);
    useEffect(async () => {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        console.log(data);
        setProduct(data.products)
    }, [])

    return (
        <div>
            <h1>Product List</h1>
            {
                product.map((e) => (
                    <h3>{e.title}</h3>
                ))
            }
        </div>)
}
