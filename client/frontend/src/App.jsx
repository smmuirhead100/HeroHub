import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import ChooseCharacter from "./pages/ChooseCharacter"
import Home from "./pages/Home"

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  function authenticate(){
    setAuthenticated(true)
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home authenticated={authenticated}/>} />
        <Route path="/choose" element={<ChooseCharacter authenticated={authenticated}/>} />
        <Route path="chat" element={<Chat authenticated={authenticated}/>} />
        <Route path='login' element={<Login authenticate={authenticate} authenticated={authenticated}/>} />
      </Routes>
    </BrowserRouter>

 )
}

export default App;
