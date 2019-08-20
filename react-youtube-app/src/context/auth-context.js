import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isAuth: false,
    toggleAuth: () => {},
    response: null
});

const AuthContextProvider = props => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ responseData, setResponseData ] = useState(null);

    const authHandler = response => {
        setIsAuthenticated(true);
        setResponseData(response);
    };

    return (
        <AuthContext.Provider
            value={{ toggleAuth: authHandler, isAuth: isAuthenticated, response: responseData }}>
                {props.children}
        </AuthContext.Provider>
    );

};

export default AuthContextProvider;