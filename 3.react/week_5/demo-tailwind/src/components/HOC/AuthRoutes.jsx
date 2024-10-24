import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoutes = ( {children} ) => {
    let isLoggedIn = true;
    return ( isLoggedIn ? children : <Navigate to='/' />)  // * Navigate is used to redirect.
}

export default AuthRoutes;