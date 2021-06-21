import { FC } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as routes from './paths'
import RouteWrapper from './RouteWrapper';
import Register from '../pages/Register/Register';
import { Redirect, Route, RouteProps } from "react-router-dom";
import Layout from "../components/Layout/Layout";


const Routes: FC = () => {

  return (
    <Router>
      <Switch>
         <RouteWrapper component={Register}/>    
      </Switch>
    </Router>
  )
};

export default Routes;
