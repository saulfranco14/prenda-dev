import React, { Fragment } from 'react';
import Header from '../layout/Header.component';
import Sidebar from '../layout/Sidebar.component';


const Dashboard = () => {
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <Sidebar/>
                <div className="seccion-principal">
                    <Header/>
                    <main>
                         <div className="contenedor-tareas">
                           <h1>Dashboard</h1>
                         </div>
                    </main>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Dashboard;