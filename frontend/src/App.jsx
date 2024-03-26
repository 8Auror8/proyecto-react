import { Link, Navigate, Route, Routes } from "react-router-dom"
import Books from "./pages/books/Books"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import { useContext } from "react"
import { SessionContext } from "./contexts/SessionContext"

import 'bootstrap/dist/css/bootstrap.css'
import { Button } from "bootstrap"

function App() {

  const {logout, user} = useContext(SessionContext)

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user?            <li>
              <Link to="/libros">Libros</Link>
            </li> : ""}

            {user?"":             <li>
              <Link to="/cuenta">Cuenta</Link>
            </li>}

            {user?"":            <li>
              <Link to="/registro">Registro</Link>
            </li>}

            {user?<button onClick={logout} className="btn btn-outline-danger">Cierra Sesión</button>:""}

          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/libros" element={<Books></Books>}></Route>
          <Route path="/cuenta" element={user ? <Navigate to="/libros"></Navigate> : <Login></Login>}></Route>
          <Route path="/registro" element={<Signup></Signup>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
