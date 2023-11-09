import getUser from "../../../../services/getUser"


export default async function page(props) {

  const getUserList = getUser();
  const users = await getUserList;
  const currentId = props.params.userId;
  const userData = users[currentId - 1]
  console.log(users[currentId - 1])

  return (
    <div>
      <h1>User Detail Page</h1>
      <h2>User Id: {userData.id}</h2>
      <h2>User Name: {userData.name}</h2>
      <h2>User Website: {userData.website}</h2>

    </div>
  )
}


export async function generateStaticParams() {
  const getUserList = getUser();
  const users = await getUserList;
  return users.map(user => ({
    userId: user.id.toString()
  }))
}