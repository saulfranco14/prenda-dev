import React, { Fragment, useState }  from 'react'
import Header               from '../layout/Header.component';
import Sidebar              from '../layout/Sidebar.component';
import { DataGrid }         from '@material-ui/data-grid';


const Talla = () => {

    // ROWS DATA GRID 

    let active;
    const [edit, setEdit] = useState(false);

    const rowTallas = [
        { id: 1, nombre: "UNITALLA",       active: true},
        { id: 2, nombre: "G-EX",           active: true},
        { id: 3, nombre: "M-CH",           active: true},
        { id: 4, nombre: "EXTRA-GRANDE",   active: true},
        { id: 5, nombre: "MEDIANA",        active: true},
    ]

    const columnsTallas = [
        { field: 'nombre',              headerName: 'Nombre',             width: 350 },
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
                        <h1>Tallas</h1>
                    </div>   
                    <div>
                        <div className="tableCenter" >
                            <DataGrid rows={rowTallas} columns={columnsTallas} pageSize={15} />
                        </div>
                    </div>                
                </main>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Talla;