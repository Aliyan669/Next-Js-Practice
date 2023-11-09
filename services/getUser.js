export default async function getUser() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json()
}