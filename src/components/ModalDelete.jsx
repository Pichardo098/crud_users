
const ModalDelete = ({isShowModalDel,user,deleteUser,setIsShowModalDel}) => {

  const handleClickCancelDel = () => {
    setIsShowModalDel(!isShowModalDel)
  }

  const handleClickDelete = (e) => {
    deleteUser(user.id)
 
    window.alert(`Usuario ${user.first_name} eliminado con éxito`)
  }

  return (
    <section className={`  transition-opacity duration-1000 fixed top-0 right-0 left-0 h-screen bg-black/40 grid place-content-center z-10 gap-3 ${isShowModalDel ? "visible opacity-100": "invisible opacity-0"}  `}>
      <section className='w-[300px] h-[200px] bg-gradient-to-b from-cyan-500 to-bkg_white flex flex-col items-center justify-center p-6 gap-6 rounded-lg lg:w-[500px] '>
        <h3 className='font-bold text-black' >¿Estás seguro de querer eliminar a {user.first_name} {user.last_name}?</h3>
        <section className='flex gap-4'>
        <button onClick={handleClickDelete} className='py-[5px] px-[10px] bg-btn_delete hover:bg-btn_del_hover rounded-lg text-bkg_white'>Aceptar</button>
        <button onClick={handleClickCancelDel}  className='py-[5px] px-[10px] bg-gray-400 hover:bg-gray-600 rounded-lg text-bkg_white'>Cancelar</button>
        </section>
      </section>

     
    </section>


  )
}

export default ModalDelete