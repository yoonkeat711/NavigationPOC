import React from 'react';
const AuthContext = React.createContext({login: false, setLogin: () => {}});

export default AuthContext;
