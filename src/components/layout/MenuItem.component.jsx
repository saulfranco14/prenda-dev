import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import {
    TitleMenuItem
} from '../../styles/MenuStyles.styles';

const MenuItem = () => {
    return ( 
        <Fragment>
             <Link to={'/users'} >
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
            <Link to={'/users'} >
                <TitleMenuItem> 
                    {"  "}
                    Prendas 
                </TitleMenuItem> 
            </Link>
            <Link to={'/users'} >
                <TitleMenuItem> 
                    {"  "}
                    Cortes 
                </TitleMenuItem> 
            </Link>
            <Link to={'/users'} >
                <TitleMenuItem> 
                    {"  "}
                    Modelos 
                </TitleMenuItem> 
            </Link>
            <Link to={'/users'} >
                <TitleMenuItem> 
                    {"  "}
                    Tallas 
                </TitleMenuItem> 
            </Link>
            <Link to={'/users'} >
                <TitleMenuItem> 
                    {"  "}
                    Colores 
                </TitleMenuItem> 
            </Link>
            <Link to={'/users'} >
                <TitleMenuItem> 
                    {"  "}
                    Clientes 
                </TitleMenuItem> 
            </Link>
        </Fragment>
     );
}
 
export default MenuItem;