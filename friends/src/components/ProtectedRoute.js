import React from "react";
import { Route, Redirect } from "react-router-dom";

//creating component that wraps route and checks to see if user is logged in..
//if theyre loogged in send them to proper route
//if theyre NOT logged in it will redirect them

export default function ProtectedRoute({ component: Component, ...rest }) {
  // console.log("IN PROTECTED ROUTE");
  let loggedIn = localStorage.getItem("token");
  // console.log(loggedIn);

  return (
    <Route
      {...rest}
      render={() => {
          if(loggedIn){
              //return component
              return <Component />
          } else {
              //return redirect
              return <Redirect to="/login" />;
          }
      }}
    />
  );
}