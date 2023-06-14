import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'
import Prompter from './components/Prompter'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")

  useEffect(() => {
        Axios.get('http://localhost:3001/getUsers').then((response) => {
        console.log(response.data)
      })
  }, [])
  
  const createUser = () => {
    console.log('posting...')
    Axios.post('http://localhost:3001/createUser', {
      name, 
      age, 
      username,
    }).then((response) => {
      setListOfUsers([...listOfUsers, {
        name, 
        age, 
        username,
      }])
    })
  }
  
  return (
    <div className='App'>
        <Prompter />
        <div className='usersDisplay'>
            {listOfUsers.map((user) => {
              return (
                <div>
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                    <h1>Username: {user.username}</h1>
                </div>
              )
            })}
        </div>
        <div>
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
            <input type="number" placeholder='Age' onChange={(e) => setAge(e.target.value)}></input>
            <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
            <button onClick={createUser}>Create User</button>
        </div>
    </div>
  )
}

export default App
