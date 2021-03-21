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
                <Route exact path="/" component={Login} />
                <RoutePrivate exact path="/dashboard" component={Dashboard} />
                <RoutePrivate exact path="/usuarios" component={Users} />
                <RoutePrivate exact path="/create-user" component={CreateUser} />
              </Switch>
            </Router>
          </ContactState>
        </AuthState>
      </AlertState>
    </Fragment>
  );
}

export default App;
