import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../src/components/auth/Login.component';
import Dashboard from '../src/menu/Dashboard.component';
import AlertState                                 from './context/alert/alertState';
import AuthState                                  from './context/auth/authState';
import authToken                                  from './config/auth';
import RoutePrivate                               from './components/routes/RoutePrivate.component';


const token = localStorage.getItem('token');
if(token) authToken(token);

function App() {
  return (
    <Fragment>
      <AlertState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <RoutePrivate exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </AuthState>
      </AlertState>
    </Fragment>
  );
}

export default App;
