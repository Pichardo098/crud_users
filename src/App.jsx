import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import ModalForm from "./components/ModalForm"
import UserList from './components/UserList'
import ModalDelete from './components/ModalDelete'

const BASE_URL = "https://users-crud.academlo.tech"

const DEFAULT_VALUES = {
  birthday:"",
  email:"",
  first_name:"",
  last_name:"",
  password:"",
  image_url:"",
}

function App() {


  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])
  


  const changeShowModal = () => {
    setIsShowModal(!isShowModal)
  } 


  //Obtener Usuarios
  const getAllUsers = () => {
    const url = `${BASE_URL}/users/`

    axios
     .get(url)
     .then(({data}) =>setUsers(data))
     .catch(err => console.log(err))

  }


  //Create user
  const createUser = (data,reset) => {
    const url = `${BASE_URL}/users/`
    
    axios.post(url, data)
      .then(()=> {
        getAllUsers()
        resetModalForm(reset)
        
      })
      .catch(err => console.log(err))
  }


  const resetModalForm = (reset)=>{
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }


  const updateUser = (data,reset) => {
    const url = `${BASE_URL}/users/${isUserToUpdate.id}/`

    axios
    .patch(url,data)
    .then(() =>{
      getAllUsers()
      resetModalForm(reset)
    })
    .catch(err => console.log(err))
  }
  //Eliminar Usuario
  const deleteUser = (id) => {
    const url = `${BASE_URL}/users/${id}/`

    axios
    .delete(url)
    .then(() =>getAllUsers())
    .catch(err => console.log(err))

  }
  useEffect(() => {
    getAllUsers()
  }, [])
  
  const hasUsers = users.length > 0

  return (
    <div id='body' className='font-["Lato"] min-h-screen bg-bkg_white text-black flex flex-col items-center justify-between bg-gradient-to-r from-white to-blue-500 w-full'>
      <Header changeShowModal={changeShowModal}/>
      <ModalForm isShowModal={isShowModal} changeShowModal={changeShowModal} createUser={createUser} isUserToUpdate={isUserToUpdate} updateUser={updateUser} resetModalForm={resetModalForm}/>
      
      <main className=' p-5  '>
      <h2 className='text-center text-3xl font-bold py-5'>Lista de Usuarios</h2>

      {
        hasUsers ?
        <UserList users={users} deleteUser={deleteUser} changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate} />
        :
        <h3 className='font-bold text-[20px] p-4 text-center mx-auto'>
        No tienes ningún usuario en tu lista. Crear un nuevo usuario.
        </h3>
      }


      </main>

      <footer className="text-center text-bkg_white  p-4 text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
        <h2>Contact</h2>
          <ul className="flex justify-center gap-3 text-xl">
            <li className="hover:text-black hover:scale-150 duration-1000">
              <a href="https://github.com/Pichardo098?tab=repositories" target="_blank" rel="noopener" id="git">
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li className="hover:text-blue-700 hover:scale-150 duration-1000">
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" id="linkdn">
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </li>
          </ul>
          <p>Created by Jesús Pichardo.</p>
        </footer>
    </div>
  )
}

export default App
