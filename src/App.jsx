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
    <div>
      <h1>Users CRUD</h1>
      <button onClick={handleOpenForm}>
        <h2>Create new user</h2>
      </button>
      <div className={`form_container ${isCloseForm && 'form_close'}`}>
        <FormUsers
          createNewUsers={createNewUsers}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div>
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
