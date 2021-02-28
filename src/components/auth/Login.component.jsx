import React, { Fragment } from 'react'

const Login = () => {
    return ( 
        <Fragment>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h2> Sistema Prenda</h2>
                        <form>
                            <div className="campo-form">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Escribe tu email"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="campo-form">
                                <label htmlFor="email">Password</label>
                                <input 
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Escribe tu contraseña"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="campo-form">
                                <input
                                    type="submit"
                                    className="btn btn-primario btn-block"
                                    value="Iniciar Sesión"
                                />
                            </div>
                        </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Login;