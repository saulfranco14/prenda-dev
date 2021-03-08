import React, { Fragment,useContext, useEffect } from 'react';
import Header from '../layout/Header.component';
import Sidebar from '../layout/Sidebar.component';
import authContext          from '../context/auth/authContext';


const Dashboard = () => {
    const authToken             = useContext( authContext );
    const { getUserByAuth  }    = authToken;

    useEffect(() => {
        getUserByAuth();

        // eslint-disable-next-line
    }, [])
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