import { useState } from "react"
import ModalDelete from "./ModalDelete"

const User = ({user,deleteUser,changeShowModal,setIsUserToUpdate}) => {


  const [isShowModalDel, setIsShowModalDel] = useState(false)
  const handleClickpdate = () => {
    changeShowModal()
    setIsUserToUpdate(user)
  }

  // const handleClickDelete = () => {
  //   deleteUser(user.id)
  // }

  const handleClickDelete = () => {
    setIsShowModalDel(!isShowModalDel)
  }
  
  

  return (
    <article className="border-2 p-4 pt-0 grid gap-2 relative bg-gradient-to-b from-cyan-500 to-blue-500 border-none rounded-lg shadow-lg shadow-black ">
      <section className="w-[200px] ">
      <div className='flex justify-center p-2 '>
          <img className=" w-[100px] h-[100px] rounded-full" src={user.image_url} alt="" />
      </div>
      <h4 className="text-[20px] font-bold text-center" >{user.first_name} {user.last_name}</h4>
      <hr className="bg-black border-none h-[1px]" />
      <section>
        <h5 className="font-bold" >Correo</h5>
        <span>{user.email}</span>
        <h5 className="font-bold" >Cumpleaños</h5>
        {user.birthday ? <span> <i className='bx bxs-gift'></i> {user.birthday}</span>  : <span>No hay fecha</span> }
      </section>
      </section>

      <hr className="bg-black border-none h-[1px]" />
      <section className="flex justify-end gap-2">
        <button onClick={handleClickDelete}  className="py-[4px] px-[6px] rounded-lg bg-btn_delete text-white border-2 border-btn_delete hover:bg-btn_delete/70" ><i className='bx bxs-trash'></i></button>
        <button onClick={handleClickpdate} className="py-[4px] px-[6px] rounded-lg bg-gray-200 border-2 hover:bg-white " ><i className='bx bxs-edit-alt'></i></button>
      </section>

      <ModalDelete isShowModalDel={isShowModalDel} deleteUser={deleteUser} user={user} setIsShowModalDel={setIsShowModalDel}/>
    </article>
  )
}

export default User