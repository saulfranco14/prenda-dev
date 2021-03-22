import React, { Fragment, useContext, useEffect, useState } from 'react'
import Sidebar                                              from '../layout/Sidebar.component';
import Header                                               from '../layout/Header.component';
import contactContext                                       from '../../context/contact/contactContext';
import AlertContext                                         from '../../context/alert/alertContext';


const CreateUser = ( props ) => {

    // Context Alert
    const alertContext          = useContext(AlertContext);
    const { alert, viewAlert }  = alertContext;

    // Context Contact
    const context                           = useContext(contactContext);
    const { insertContact, viewContacts }   = context;

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

    const onSubmit = ( e ) => {
        e.preventDefault();
        if ( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || sexo.trim() === '' || role.trim() === '' ) {
            console.log("viewError")
            viewAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        if ( password.length < 8 ) {
            viewAlert('El password debe de ser mayor a 8 caracteres', 'alerta-error');
            return;
        }
    
        insertContact(contact);
        // Register User
        setContact({
            email       : '',
            password    : '',
            nombre      : '',
            sexo        : '',
            role        : '', 
        })
        viewContacts();
        props.history.push('/usuarios');
    }



    return (  
        <Fragment>
           <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Crear usuario</h1>
                        </div>
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
                                     onSubmit={ onSubmit }
                                >
                                    <div className="campo-form">
                                        <label htmlFor="nombre">Nombre Completo</label>
                                        <input 
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Escribe el nombre"
                                            autoComplete="off"
                                            value={ nombre }
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
                                            value={ email }
                                            onChange={onChange}
                                        />
                                        <label className="marginLabel" htmlFor="password">Password</label>
                                        <input 
                                            type="text"
                                            id="password"
                                            name="password"
                                            placeholder="Escribe su password para inicio de sesión"
                                            autoComplete="off"
                                            value={ password }
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="campo-form">
                                        <label htmlFor="sexo">Sexo</label>
                                        <select 
                                            name="sexo"
                                            className="selectForm" 
                                            value={sexo}
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
                                            value={role}
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
 
export default CreateUser;