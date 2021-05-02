import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import {
    TitleMenuItem
} from '../../styles/MenuStyles.styles';

const MenuItem = () => {
    return ( 
        <Fragment>
             <Link to={'/excel'}  >
                <TitleMenuItem> 
                    {"  "}
                    Excel 
                </TitleMenuItem> 
            </Link>
            <Link to={'/usuarios'} >
                <TitleMenuItem> 
                    {"  "}
                    Usuarios 
                </TitleMenuItem> 
            </Link>
            <Link to={'/prendas'} >
                <TitleMenuItem> 
                    {"  "}
                    Prendas 
                </TitleMenuItem> 
            </Link>
            <Link to={'/cortes'} >
                <TitleMenuItem> 
                    {"  "}
                    Cortes 
                </TitleMenuItem> 
            </Link>
            <Link to={'/modelos'} >
                <TitleMenuItem> 
                    {"  "}
                    Modelos 
                </TitleMenuItem> 
            </Link>
            <Link to={'/tallas'} >
                <TitleMenuItem> 
                    {"  "}
                    Tallas 
                </TitleMenuItem> 
            </Link>
            <Link to={'/colores'} >
                <TitleMenuItem> 
                    {"  "}
                    Colores 
                </TitleMenuItem> 
            </Link>
            <Link to={'/clientes'} >
                <TitleMenuItem> 
                    {"  "}
                    Clientes 
                </TitleMenuItem> 
            </Link>
        </Fragment>
     );
}
 
export default MenuItem;