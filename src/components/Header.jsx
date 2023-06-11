const Header = ({changeShowModal}) => {
  
  const handleClickShowModal = () => {
    changeShowModal()
  }

  return (
    <header className=" w-full p-4 font-bold items-center  bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <section className="flex justify-between max-w-[1024px] mx-auto">
      <h1 className="text-white text-[20px] font-bold lg:text-[35px]">Usuarios</h1>
      <button onClick={handleClickShowModal} className="bg-text_primary p-[5px] rounded-md hover:bg-text_primary/70 flex items-center gap-[5px] text-white lg:text-[20px]" ><i className='bx bx-plus'></i> Crear nuevo usuario</button>
      </section>
      
    </header>
  )
}

export default Header