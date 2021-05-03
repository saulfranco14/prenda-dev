import React, { Fragment, useState }  from 'react'
import Header               from '../layout/Header.component';
import Sidebar              from '../layout/Sidebar.component';
import { DataGrid }         from '@material-ui/data-grid';


const Color = () => {

    // ROWS DATA GRID 

    let active;
    const [edit, setEdit] = useState(false);

    const rowColores = [
        { id: 1, nombre: "SEXY PINK",     description: "BIKINI ENCAGOSO",     active: true},
        { id: 2, nombre: "LADRILLO",        description: "TANGA FRESCURA",      active: true},
        { id: 3, nombre: "PERLA",           description: "BOXER PECOBE",        active: true},
        { id: 4, nombre: "BERENJENA",       description: "BOXER PECOBE",        active: true},
        { id: 5, nombre: "CACAO",           description: "BOXER PECOBE",        active: false},
    ]

    const columnsColores = [
        { field: 'nombre',              headerName: 'Nombre',                   width: 250 },
        { field: 'description',          headerName: 'Descripción',             width: 250 },
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
                        <h1>Colores</h1>
                    </div>   
                    <div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowColores} columns={columnsColores} pageSize={15} />
                        </div>
                    </div>                  
                </main>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Color;