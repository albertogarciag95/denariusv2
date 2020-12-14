import React from "react";
import { Redirect, Route } from "react-router-dom";

const RoutePrivate = ({ component: Component, ...routeProps }) => (
  <Route 
    {...routeProps} 
    render={props => 
      localStorage.getItem('isLoggedIn') === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { 
              from: props.location
            }
          }}
        />
      )
    } />
);

export default RoutePrivate;