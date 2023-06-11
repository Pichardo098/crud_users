import User from "./User"

const UserList = ({users,deleteUser,changeShowModal,setIsUserToUpdate,}) => {



  return (
    <section className="flex mt-3 gap-6 w-full justify-center  flex-wrap max-w-[1024px] mx-auto">
      {
        users.map((user) => <User key={user.id} user={user} deleteUser={deleteUser} changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate} /> )
      }
    </section>
  )
}

export default UserList