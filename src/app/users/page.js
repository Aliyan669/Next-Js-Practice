import getUser from "../../../services/getUser"
import Link from "next/link";
export default async function page() {
    const getUserList = getUser();
    const users = await getUserList;
    console.log(users)
    return (
        <div>
            <h1>User List in SSG (Static Side Generation)</h1>
            {
                users.map((e) => {
                    <h2>
                        <Link href={`/users/${e.id}`}>{e.name}</Link>
                    </h2>
                })
            }
        </div>
    )
}
