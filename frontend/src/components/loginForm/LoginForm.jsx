import React, { useContext } from 'react'
import { useState } from 'react'
import axios from "axios"
import { SessionContext } from '../../contexts/SessionContext'


function LoginForm() {

    const [datos, setDatos] = useState({email:"", password:""})
    const {login} = useContext(SessionContext)

    function buttonLogin(){
        axios.post('http://localhost:3000/api/users/login', datos)
        /* axios.post("https://localhost/3000/api/users/login", datos) */
        .then((response)=>{
            console.log(response.data)
            login({email: datos.email, token: response.data.token})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
            <div className="container">
                <h1 className="mt-5 mb-4">Inicio de Sesión</h1>
                <div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Correo Electrónico</label>
                        <input type="email" value={datos.email} onChange={(e)=> setDatos({...datos, email: e.target.value})}className="form-control" id="email" placeholder="Ingresa tu correo electrónico"/>
                    </div>
                    <div className="mb-3">
                        <label for="contraseña" className="form-label">Contraseña</label>
                        <input type="password" value={datos.password} onChange={(e)=> setDatos({...datos, password: e.target.value})}className="form-control" id="contraseña" placeholder="Ingresa tu contraseña"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="recordarme"/>
                            <label className="form-check-label" for="recordarme">Recordarme</label>
                    </div>
                    <button onClick={buttonLogin} type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </div>
            </div>
        </>
    )
}

export default LoginForm