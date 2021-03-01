import React, { Fragment } from 'react';
import MenuItem from './MenuItem.component';

const Sidebar = () => {
    return ( 
        <Fragment>
             <aside>
                <h1>
                    Módulos 
                </h1>
                <div className="proyectos">
                    <MenuItem/>
                </div>
            </aside>
        </Fragment>
     );
}
 
export default Sidebar;