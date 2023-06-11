import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const ModalForm = ({isShowModal,createUser,isUserToUpdate,updateUser,resetModalForm}) => {

  const {register, handleSubmit, reset} = useForm()
  const [watchPassword, setWatchPassword] = useState(false)

  const handleTogglePassword = () => {
    setWatchPassword(!watchPassword)
  }

  const submit = (data) => {
    setWatchPassword(false)
    if(!data.birthday) data.birthday = null
    if(data.image_url === "" ){
      data.image_url = "/bkg_user.png"
    }else{
      data.image_url
    }
    if(isUserToUpdate){
      updateUser(data,reset)
    }else{
      createUser(data,reset)
    }
  }


  const handleClickCloseModal = () => {

    resetModalForm(reset)
    setWatchPassword(false)
  }

  useEffect(() => {
    if(isUserToUpdate){
      reset(isUserToUpdate)
    }


  }, [isUserToUpdate])
  

  return (
    <section className={`  transition-opacity duration-1000 fixed top-0 right-0 left-0 h-screen bg-black/40 grid place-content-center z-10 gap-3 ${isShowModal ? "visible opacity-100": "invisible opacity-0"}  `}>
      <form onSubmit={handleSubmit(submit)} className="bg-gradient-to-b from-cyan-500 to-bkg_white text-black w-[300px] p-4 grid gap-6 rounded-xl relative  max-[600px]:overflow-scroll lg:w-[500px]">
        <h3 className="font-bold text-3xl lg:text-center">{isUserToUpdate ? "Editar usuario":"Nuevo Usuario"}</h3>

        <p className="text-btn_delete font-bold" >Campos requeridos *</p>
        {/* Nombre */}
        <div className="grid gap-2">
          <label className="font-bold text-sm text-black">
            Nombre <span className="text-btn_delete font-bold">*</span>
          </label>
          <input  placeholder="Ingresa tu nombre..." className="rounded-lg bg-gray-100 outline-none p-2" {...register("first_name" ,{required:true})} type="text"  />
        </div>

        {/* Apellido */}
        <div className="grid gap-2">
          <label className="font-bold text-sm text-black">
            Apellidos <span className="text-btn_delete font-bold">*</span>
          </label>
          <input  placeholder="Ingresa tus apellidos..." className="rounded-lg bg-gray-100 outline-none p-2" {...register("last_name" ,{required:true})} type="text" />
        </div>

        {/* Correo */}
        <div className="grid gap-2">
          <label className="font-bold text-sm text-black">
            Correo <span className="text-btn_delete font-bold">*</span>
          </label>
          <input  placeholder="Ingresa tu correo..." className="rounded-lg bg-gray-100 outline-none p-2" {...register("email" ,{required:true})} type="email" />
        </div>

        {/* Contraseña */}
        <div className="grid gap-2 relative">
          <label className="font-bold text-sm text-black">
            Contraseña <span className="text-btn_delete font-bold">*</span>
          </label>
          <input  placeholder="Ingresa tu contraseña..." className="rounded-lg bg-gray-100 outline-none p-2 " {...register("password" ,{required:true})}  type={watchPassword ? "text":"password"} />
          <div onClick={handleTogglePassword} className="absolute right-0 top-[28px] bg-white rounded-lg py-[8px] px-[5px] hover:bg-black/30">
            <i className='bx bxs-low-vision'></i>
          </div>
        </div>

        {/* Cumpleaños */}
        <div className="grid gap-2">
          <label className="font-bold text-sm text-black">
            Cumpleaños
          </label>
          <input  placeholder="DD/MM/AAAA" className="rounded-lg bg-gray-100 outline-none p-2" {...register("birthday")} type="date" />
        </div>
        {/* Image */}
        <div className="grid gap-2">
          <label className="font-bold text-sm text-black">
            Imagen de Perfil
          </label>
          <input  placeholder="Ingresa la URL de tu imagen..." className=" rounded-lg bg-gray-100 outline-none p-2" {...register("image_url")} type="text"  />
        </div>

        <button onClick={handleClickCloseModal}  type="button" className="absolute right-0 py-5 px-2  text-3xl font-bold hover:text-btn_delete"><i className='bx bx-x'></i></button>

        <button className="bg-text_primary text-bkg_white p-[5px] rounded-md hover:bg-text_primary/70 flex items-center justify-center gap-[5px]" > {isUserToUpdate?"Guardar cambios":"Crear nuevo usuario"}</button>

      </form>
    </section>
  )
}

export default ModalForm