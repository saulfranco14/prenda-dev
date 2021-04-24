import React from 'react';

let active;

export const columnsUser = [
    { field: 'nombre',            headerName: 'Nombre',             width: 300 },
    { field: 'email',             headerName: 'Email',              width: 300 },
    {
      field: "",
      headerName: "Editar",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: ( params ) => {
      return  <a
                    className   ="btn btn-editarUser"
                    href        = { `edit-user/${ params.getValue('_id') } `}
                >
                    Editar
                </a>;
    }
  },
  {
    field: "activo",
    headerName: "Activo",
    sortable: false,
    width: 150,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
      active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Activo </button> : <button type ="button" className   ="btn btn-eliminar"> Desactivo </button> ;
      return  active
    }
  },
];



const handleClick = (id , e ) =>{

    console.log(id);
}