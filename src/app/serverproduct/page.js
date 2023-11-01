//////////  Fetch Api Data in server Components /////////////

import Button from "./button";

async function ProductList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}
export default async function page() {
    let products = await ProductList();
    console.log(products)
    return (
        <div>
            <h1>Fetch Api Data in Server Components</h1>
            {
                products.map((e) => (
                    <div>
                        <h3>Name: {e.title}</h3>
                        <Button price={e.price} />
                    </div>
                ))
            }
        </div>)
}
