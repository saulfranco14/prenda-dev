import React, { Fragment } from 'react'

const Header = () => {
    return ( 
        <Fragment>
             <header className="app-header">
                {/* {
                    user ? 
                    { user.auth.nombre }    
                */}

                        <p className="nombre-usuario">Hola Saúl Franco<span></span></p>
                    {/* : null
                } */}
                <nav className="nav-principal">
                    <button
                        className="btn btn-blank cerrar-sesion"
                        // onClick = { () => logoutUser() }
                    >
                        Cerrar Sesión
                    </button>
                </nav>
            </header>
        </Fragment>
     );
}
 
export default Header;