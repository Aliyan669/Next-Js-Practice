import React from 'react'
////////// Api Loader Check //////////

async function userList() {
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;

}

export default async function page() {
    let users = await userList();
    console.log(users)
    return (
        <div>
            <h1>Api Loader in Next Js</h1>
            {
                users.map((e) => (
                    <div>
                        <h3>User Name: {e.firstName}</h3>

                    </div>
                ))
            }
        </div>)
}

export function generateMetadata() {
    return {
        title: "Api Loader",
        description: "This is a Loader Page"
    }
}
