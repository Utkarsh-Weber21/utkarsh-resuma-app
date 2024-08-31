import React from 'react';
import { Navigate, Route } from 'react-router';

function GuestRoute(props){
    const isAuth = true;

    if(isAuth) return <Navigate to = '/' />;

    return <Route {...props} />

}

export default GuestRoute;