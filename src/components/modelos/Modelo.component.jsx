import React, { Fragment, useState }  from 'react'
import Header               from '../layout/Header.component';
import Sidebar              from '../layout/Sidebar.component';
import { DataGrid }         from '@material-ui/data-grid';

const Modelo = () => {

    // ROWS DATA GRID 

    let active;
    const [edit, setEdit] = useState(false);

    const rowModelos = [
        { id: 1, nombre: "STRABERRY BIKINNY",               tipo: "6032",       active: true},
        { id: 2, nombre: "BOXER ALE",                       tipo: "4102",       active: true},
        { id: 3, nombre: "TANGA 3037",                      tipo: "3037",       active: true},
        { id: 4, nombre: "TANGA 3023",                      tipo: "3023",       active: false},
        { id: 5, nombre: "BOXER TABA",                      tipo: "3367",       active: true},
    ]

    const columnsModelos = [
        { field: 'nombre',              headerName: 'Nombre',             width: 250 },
        { field: 'tipo',                headerName: 'Tipo',               width: 150 },
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
                        <h1>Modelos</h1>
                    </div>
                    <div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowModelos} columns={columnsModelos} pageSize={15} />
                        </div>
                    </div>                    
                </main>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Modelo;