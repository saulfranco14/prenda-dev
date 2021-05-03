import React, { Fragment, useState }  from 'react'
import Header               from '../layout/Header.component';
import Sidebar              from '../layout/Sidebar.component';
import { DataGrid }                                 from '@material-ui/data-grid';


const Operacion = () => {

    let active;
    const [edit, setEdit] = useState(false);

    const rowOperaciones = [
        { id: 1, nombre: "SELLADO Y CONTADO	",              tipo: "MANUAL",     costo: "$0.5",      modelo: " 6032 - STRABERRY BIKINNY ",   active: true},
        { id: 2, nombre: "DOBLADO Y EMBOLSADO",             tipo: "MANUAL",     costo: "$0.3",      modelo: " 3037 - TANGA ",               active: true},
        { id: 3, nombre: "PEGADO CODIGO	",                  tipo: "MAQUINA",    costo: "$0.10",     modelo: " 6032 - STRABERRY BIKINNY ",   active: false},
        { id: 4, nombre: "UNION ETIQUETA",                  tipo: "MANUAL",     costo: "$0.3",      modelo: " 6032 - STRABERRY BIKINNY ",   active: true},
        { id: 5, nombre: "CORTE ETIQUETA",                  tipo: "MAQUINA",    costo: "$0.5",      modelo: " 3037 - TANGA ",               active: true},
    
    ]

    const columnsOperaciones = [
        { field: 'nombre',            headerName: 'Nombre',             width: 210 },
        { field: 'tipo',              headerName: 'Tipo',               width: 120 },
        { field: 'costo',             headerName: 'Costo',               width: 100 },
        { field: 'modelo',            headerName: 'Modelo',               width: 230 },
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
    
    return ( 
        <Fragment>
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Header/>
                <main>
                    <div className="contenedor-tareas">
                        <h1>Operaciones</h1>
                    </div> 
                    <div>
                            <div className="tableCenter" >
                                <DataGrid rows={rowOperaciones} columns={columnsOperaciones} pageSize={15} />
                            </div>
                    </div>                  
                </main>
            </div>
        </div>
    </Fragment>
     );
}
 
export default Operacion;