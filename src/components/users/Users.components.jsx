import React, { Fragment,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header.component';
import Sidebar from '../layout/Sidebar.component';
import authContext          from '../../context/auth/authContext';
import { DataGrid } from '@material-ui/data-grid';
import { columnsUser } from '../../utils/rowData';


const rowsUser = [
    { id: 1, nombre : "Saúl Mauricio Franco Rentería", edad:27, days:"3 por semana", grupo:"Amarillo", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 2, nombre : "Miguel", edad:29, days:"3 por semana", grupo:"Azul", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 3, nombre : "Omar Gutierrez", edad:24, days:"3 por semana", grupo:"Morado", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 4, nombre : "Virginia Ziga", edad:40, days:"3 por semana", grupo:"Azul", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 5, nombre : "Iván Franco", edad:31, days:"3 por semana", grupo:"Morado", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 6, nombre : "Roberto", edad:35, days:"3 por semana", grupo:"Rojo", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 7, nombre : "Sandra Villanueva", edad:28, days:"3 por semana", grupo:"Rojo", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 8, nombre : "Yan Angel", edad:29, days:"3 por semana", grupo:"Azul", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : false},
    { id: 9, nombre : "Fernando Rentería", edad:35, days:"3 por semana", grupo:"Amarillo", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 10, nombre : "Esther", edad:29, days:"3 por semana", grupo:"Rojo", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 11, nombre : "Selene", edad:24, days:"3 por semana", grupo:"Café", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : false},
    { id: 12, nombre : "Gerardo Gaona", edad:32, days:"3 por semana", grupo:"Café", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : false},
    { id: 13, nombre : "Lorena Leyva", edad:30, days:"3 por semana", grupo:"Amarillo", direccion: "Xochitenco calle union", telefono_celular:"5534932203", active : true},
    { id: 14, nombre : "Valentín Alvarez", edad:36, days:"3 por semana", grupo:"Amarillo", direccion: "Xochitenco calle union", telefono_celular:"5534932203" , active : false},
];



const Users = () => {
    const authToken             = useContext( authContext );
    const { getUserByAuth  }    = authToken;

    useEffect(() => {
        getUserByAuth();

        // eslint-disable-next-line
    }, [])
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Usuarios</h1>
                            <div className="buttonCreate">
                                 <Link to={'/create-user'} > 
                                    <button
                                        className="btn btn-primario"
                                    >
                                        Crear usuario
                                    </button>
                                </Link> 
                            </div>
                        </div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowsUser} columns={columnsUser} pageSize={15} />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Users;