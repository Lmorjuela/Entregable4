import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [isCloseForm, setIsCloseForm] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech/'

  const [
    users,
    getAllUsers,
    createNewUsers,
    deleteUserById,
    updateUserById
  ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  const handleOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='header_title'>Users</h1>
        <button className='header_btn' onClick={handleOpenForm}>
          <h2 className='header_title-btn'>Create new user</h2>
        </button>
      </header>
      <div className={`form_container ${isCloseForm && 'form_close'}`}>
        <FormUsers
          createNewUsers={createNewUsers}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div className='usercard_container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsCloseForm={setIsCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
