import React, { Fragment, useState }  from 'react'
import Header               from '../layout/Header.component';
import Sidebar              from '../layout/Sidebar.component';
import { DataGrid }         from '@material-ui/data-grid';


const Corte = () => {

    // ROWS DATA GRID 

    let active;
    const [edit, setEdit] = useState(false);

    const rowCortes = [
        { id: 1, nombre: "STRABERRY BIKINNY",               costo: "$3.00",      modelo: " 6032 - STRABERRY BIKINNY ",      active: true},
        { id: 2, nombre: "BOXER ALE",                       costo: "$3.00",      modelo: " 4102 - BOXER ALE ",               active: true},
        { id: 3, nombre: "TANGA 3037",                      costo: "$3.00",         modelo: " 3037 - TANGA 3037 ",              active: true},
        { id: 4, nombre: "TANGA 3023",                      costo: "$3.00",         modelo: " 3023 - TANGA 3023 ",              active: false},
        { id: 5, nombre: "BOXER TABA",                      costo: "$3.00",         modelo: " 3367 - BOXER TABA ",              active: false},
    ]

    const columnsCortes = [
        { field: 'nombre',            headerName: 'Nombre',             width: 250 },
        { field: 'costo',             headerName: 'Costo',               width: 100 },
        { field: 'modelo',            headerName: 'Modelo',               width: 250 },
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
                        <h1>Cortes</h1>
                    </div> 
                    <div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowCortes} columns={columnsCortes} pageSize={15} />
                        </div>
                    </div>                   
                </main>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Corte;