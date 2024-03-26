import React from 'react'

function SignupForm() {
    return (
        <>
            <div className="container">
                <h1 className="mt-5 mb-4">Registro</h1>
                <div>
                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
                    </div>
                    <div className="mb-3">
                        <label for="contraseña" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contraseña" placeholder="Ingresa tu contraseña" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="recordarme" />
                        <label className="form-check-label" for="recordarme">Recordarme</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </div>
            </div>
        </>
    )
}

export default SignupForm