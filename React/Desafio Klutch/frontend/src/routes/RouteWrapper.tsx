import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import Layout from "../components/Layout/Layout";

interface Props extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<Props> = ({...props}) => {
  
    return (
      <Layout>
          <Route  component={props.component} />
      </Layout>
    );
};

export default RouteWrapper;
