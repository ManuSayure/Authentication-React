/**
 * SignIn: Entrar com as credenciais para acessar o sistema.
 * SignUp: Criar uma nova conta para acessar o sistema 
 * App: Área que contém as properties e permite adicionar novas.
 * NotFound: Para rotas desconhecidas.
 */

 import React from 'react';
 import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
 import { isAuthenticated } from './services/auth';

 import SingUp from './pages/SingUP';
 import Home from './pages/Home';
 import Login from './pages/Login';
 import NotFound from './pages/NotFound';
 import Main from './pages/Main';

 const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
  const Routes = () => (
      <BrowserRouter>
        <Switch>

            <Route  exact path = '/'       component ={ Home }      />             
            <Route        path = '/signup' component ={ SingUp }    />
            <Route        path = '/login'  component ={ Login }     />
            <PrivateRoute path = '/app'    component ={ Main }      />
            <Route        path = '*'       component ={ NotFound } />
 
        </Switch>
      </BrowserRouter>
  ); export default Routes;
 