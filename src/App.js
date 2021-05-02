import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoutePrivate                               from './components/routes/RoutePrivate.component';
import AlertState                                 from './context/alert/alertState';
import AuthState                                  from './context/auth/authState';
import ContactState                               from './context/contact/contactState';
import authToken                                  from './config/auth';
import Login                                      from '../src/components/auth/Login.component';
import Dashboard                                  from '../src/components/menu/Dashboard.component';
import Users                                      from '../src/components/users/Users.components';
import CreateUser                                 from '../src/components/users/CreateUser.component';
import EditUser                                   from '../src/components/users/EditUser.component';
import Excel                                      from '../src/components/excel/Excel.component';
import Prenda                                     from '../src/components/prendas/Prenda.component';
import Corte                                      from '../src/components/cortes/Corte.component';
import Modelo                                     from '../src/components/modelos/Modelo.component';
import Talla                                      from '../src/components/tallas/Talla.component';
import Color                                      from '../src/components/colores/Color.component';
import Cliente                                    from '../src/components/clientes/Cliente.component';


const token = localStorage.getItem('token');
if(token) authToken(token);

function App() {
  return (
    <Fragment>
      <AlertState>
        <AuthState>
          <ContactState>
            <Router>
              <Switch>
                <Route exact path="/"                     component={Login} />
                <RoutePrivate exact path="/dashboard"     component={Dashboard} />
                <RoutePrivate exact path="/usuarios"      component={Users} />
                <RoutePrivate exact path="/edit-user/:id" component={EditUser} />
                <RoutePrivate exact path="/create-user"   component={CreateUser} />
                <RoutePrivate exact path="/excel"         component={Excel} />
                <RoutePrivate exact path="/prendas"       component={Prenda} />
                <RoutePrivate exact path="/cortes"        component={Corte} />
                <RoutePrivate exact path="/modelos"       component={Modelo} />
                <RoutePrivate exact path="/tallas"        component={Talla} />
                <RoutePrivate exact path="/colores"       component={Color} />
                <RoutePrivate exact path="/clientes"      component={Cliente} />
              </Switch>
            </Router>
          </ContactState>
        </AuthState>
      </AlertState>
    </Fragment>
  );
}

export default App;
