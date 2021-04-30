import React, { Fragment,useContext, useEffect, useState }    from 'react';
import { Link }                                     from 'react-router-dom';
import { DataGrid }                                 from '@material-ui/data-grid';
import Header                                       from '../layout/Header.component';
import Sidebar                                      from '../layout/Sidebar.component';
import authContext                                  from '../../context/auth/authContext';
import contactContext                               from '../../context/contact/contactContext';
import FormUser                                     from '../../components/users/FormUser.component'



const Users = (  ) => {
    
    // Context Auth
    const authToken             = useContext( authContext );
    const { getUserByAuth  }    = authToken;

    // Context Contact
    const context                                                       = useContext(contactContext);
    const { contacts, viewContacts, editContact, editContactForm }      = context;
    
    useEffect(() => {
        getUserByAuth();
        viewContacts();
        // eslint-disable-next-line
    }, []);

    let active;
    const [edit, setEdit] = useState(false)

    const columnsUser = [
        { field: 'nombre',            headerName: 'Nombre',             width: 300 },
        { field: 'email',             headerName: 'Email',              width: 300 },
        {
          field                     : "",
          headerName                : "Editar",
          sortable                  : false,
          width                     : 100,
          disableClickEventBubbling : true,

          renderCell: ( params ) => {

          return    <button
                        className   ="btn btn-editarUser"
                        onClick     = { ()=> clickEdit( params.getValue('_id') ) }
                        // href        = { `edit-user/${ params.getValue('_id') } `}
                    >
                        Editar
                    </button>;
        }
        },
        {
            field                       : "activo",
            headerName                  : "Activo",
            sortable                    : false,
            width                       : 150,
            disableClickEventBubbling   : true,
            renderCell: ( params ) => {
            active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Activo </button> : <button type ="button" className   ="btn btn-eliminar"> Desactivo </button> ;
            return  active
            }
        },
    ];

    const clickEdit = ( idContact ) => {
        setEdit(true)
        editContact(idContact);
        return edit;
    }

    const clickReverse = () => {
        setEdit(false)
        return edit;
    }

    return ( 
        <Fragment>
            <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                        <div className="contenedor-tareas">
                            <h1>Usuarios</h1>
                            <div >
                                {
                                    edit ?
                                        <button
                                            className="btn btn-reverse"
                                            onClick={ ()=>clickReverse() }
                                        >
                                            Regresar
                                        </button>
                                    :
                                    <Link to={'/create-user'} className="btnCreate" > 
                                        <button
                                            className="btn btn-primario"
                                        >
                                            Crear usuario
                                        </button>
                                    </Link> 
                                }
                                 
                            </div>
                        </div>
                        {
                            edit ?
                            <Fragment>
                               <FormUser dataInfo={ editContactForm[0] }/>
                            </Fragment>
                            : 
                            <div className="tableCenter" >
                                <DataGrid rows={contacts} columns={columnsUser} pageSize={15} />
                            </div>  
                        }
                       
                       
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Users;