import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import TaxonSilumation from "../pages/Register/TaxonSimulation/TaxonSinulation";
import * as routes from "./paths";



interface RegisterRoutesProps {
  /* sideMenuProps: SideMenuProps */
}
const RegisterRoutes: FC<RegisterRoutesProps> = (/* { sideMenuProps } */) => {

  return (
    <Switch> 
      <Route
        exact path={routes.HOME}
        render={() => <TaxonSilumation />}
      />   
     
    </Switch>
  );
};

export default RegisterRoutes;
