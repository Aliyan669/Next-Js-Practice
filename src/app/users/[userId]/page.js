import getUser from "../../../services/getUser"
export default async function page(props) {
  const getUserList = getUser();
  const users = await getUserList;
  console.log(users)
  return (
    <div>User Detail Page</div>
  )
}
