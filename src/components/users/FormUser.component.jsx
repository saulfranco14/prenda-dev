import React, { Fragment, useState, useContext } from 'react'
import AlertContext                                         from '../../context/alert/alertContext';


const FormUser = ( dataInfo ) => {

    // Context Alert
    const alertContext          = useContext(AlertContext);
    const { alert, viewAlert }  = alertContext;

     // User
     const [ contact, setContact ] = useState({
        email       : '',
        password    : '',
        nombre      : '',
        sexo        : '',
        role        : '',   
    });

    const { nombre, email, password, sexo, role } = contact;

    const onChange = ( e ) => {
        setContact({
            ...contact,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <Fragment>
           <div className="contenedor-app">
                <div className="seccion-principal">
                    <main>
                            <div className="form-create">
                                {
                                    alert ? 
                                    (
                                        <div className={ `alerta ${alert.category}` }>
                                            {alert.msg}
                                        </div>
                                    )
                                    :
                                    null
                                }
                                <div className="contenedor-form-create sombra-dark">
                                <form
                                    
                                >
                                    <div className="campo-form">
                                        <label htmlFor="nombre">Nombre Completo</label>
                                        <input 
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Escribe el nombre"
                                            autoComplete="off"
                                            value={ dataInfo.dataInfo.nombre }
                                            onChange={onChange}
                                        />

                                      
                                        
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Escribe su email, lo ocupará para inicio de sesión"
                                            autoComplete="off"
                                            value={ dataInfo.dataInfo.email }
                                            onChange={onChange}
                                        />
                                        <label className="marginLabel" htmlFor="password">Password</label>
                                        <input 
                                            type="text"
                                            id="password"
                                            name="password"
                                            placeholder="Escribe su password para inicio de sesión"
                                            autoComplete="off"
                                            onChange={onChange}
                                            disabled
                                        />
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="sexo">Sexo</label>
                                        <select 
                                            name="sexo"
                                            className="selectForm" 
                                            value={dataInfo.dataInfo.sexo}
                                            onChange={onChange}
                                        >
                                            <option value="">Selecciona un sexo</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="femenino">Femenino</option>
                                        </select>
                                        <label className="roleMargin" htmlFor="role">Role</label>
                                        <select 
                                            name="role"
                                            className="selectForm"
                                            value={dataInfo.dataInfo.role}
                                            onChange={onChange}
                                        >   
                                            <option value="">Selecciona un rol</option>
                                            <option value="1">Administrador</option>
                                            <option value="2">Encargado</option>
                                            <option value="3">Usuario</option>
                                        </select>
                                    </div>
                                    <div className="marginButton">
                                        <button
                                            type="submit"
                                            className="btn btn-create btn-primario"
                                        >
                                            Crear usuario
                                        </button>
                                    </div>
                                </form>
                                </div>
                            </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default FormUser;