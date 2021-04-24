import React, { Fragment,useContext, useEffect }    from 'react';
import { Link }                                     from 'react-router-dom';
import { DataGrid }                                 from '@material-ui/data-grid';
import { columnsUser }                              from '../../utils/rowData';
import Header                                       from '../layout/Header.component';
import Sidebar                                      from '../layout/Sidebar.component';
import authContext                                  from '../../context/auth/authContext';
import contactContext                               from '../../context/contact/contactContext';


const Users = () => {

    // Context Auth
    const authToken             = useContext( authContext );
    const { getUserByAuth  }    = authToken;

    // Context Contact
    const context                       = useContext(contactContext);
    const { contacts, viewContacts }    = context;


    useEffect(() => {
        getUserByAuth();
        viewContacts();
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
                            <DataGrid rows={contacts} columns={columnsUser} pageSize={15} />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Users;