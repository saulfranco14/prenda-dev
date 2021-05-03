import React, { Fragment, useState}  from 'react'
import Header               from '../layout/Header.component';
import Sidebar              from '../layout/Sidebar.component';
import { DataGrid }         from '@material-ui/data-grid';

const Cliente = () => {

    // ROWS DATA GRID 

    let active;
    const [edit, setEdit] = useState(false);

    const rowClientes = [
        { id: 1, nombre: "ACTIVA",              telefono_cel: "53 59 04 74",                active: true},
        { id: 2, nombre: "ANY-BRA",             telefono_cel: "044 55 21 28 28 79",         active: true},
        { id: 3, nombre: "JORGE RIVHANY",       telefono_cel: "044 55 54 56 29 96",         active: true},
        { id: 4, nombre: "JORGE GARCIA",        telefono_cel: "55",                         active: true},
        { id: 5, nombre: "FRESCURA",            telefono_cel: "5536777137",                 active: true},
    ]

    const columnsClientes = [
        { field: 'nombre',              headerName: 'Nombre',                   width: 250 },
        { field: 'telefono_cel',          headerName: 'Télefono Celular',             width: 250 },
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
        return edit;
    }

    const clickReverse = () => {
        return edit;
    }
    // ROWS DATA GRID 


    return ( 
        <Fragment>
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Header/>
                <main>
                    <div className="contenedor-tareas">
                        <h1>Clientes</h1>
                    </div>
                    <div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowClientes} columns={columnsClientes} pageSize={15} />
                        </div>
                    </div>                    
                </main>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Cliente;