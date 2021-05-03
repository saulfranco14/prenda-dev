import React, { Fragment, useState }  from 'react'
import Header               from '../layout/Header.component';
import Sidebar              from '../layout/Sidebar.component';
import { DataGrid }         from '@material-ui/data-grid';

const Excel = () => {

    // ROWS DATA GRID 

    let active;
    const [edit, setEdit] = useState(false);

    const rowExcel = [
        { id: 1, nombre: "SELLADO Y CONTADO",           active: true},
        { id: 2, nombre: "PEGADO CODIGO",               active: true},
        { id: 3, nombre: "CORTE ETIQUETA",              active: true},
    ]

    const columnsExcel = [
        { field: 'nombre',              headerName: 'Nombre',                   width: 400 },
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
                        <h1>Excel</h1>
                    </div> 
                    <div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowExcel} columns={columnsExcel} pageSize={15} />
                        </div>
                    </div>                  
                </main>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Excel;