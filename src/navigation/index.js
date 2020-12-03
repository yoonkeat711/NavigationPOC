import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './../screen/Dashboard';
import Details from './../screen/Details';
import Logout from './../screen/Logout';
import Welcome from './../screen/Welcome';
import Login from './../screen/Login';
import SessionExpiry from './../screen/SessionExpiry';

import AuthContext from './../AuthContext';

const preLoginScreen = {
    Welcome: Welcome,
    Login: Login,
}

const postLoginScreen = {
    Dashboard: Dashboard,
    Details: Details,
    // Logout: Logout,
}

const AppStack = createStackNavigator();
const AppScreen = () => {
    return (
        <AuthContext.Consumer>
            {({ login }) => (
                <AppStack.Navigator>
                    {login ? (
                        <>
                            {/* //note: postLogin */}
                            <AppStack.Screen name={"Login"} component={Login} />
                            <AppStack.Screen name={"Dashboard"} component={Dashboard} />
                            <AppStack.Screen name={"Details"} component={Details} />
                        </>
                    ) :
                        (
                            <>
                            {/* //note: prelogin */}
                                <AppStack.Screen name={"Logout"} component={Logout} />
                                <AppStack.Screen name={"Welcome"} component={Welcome} />
                                <AppStack.Screen name={"SessionExpiry"} component={SessionExpiry} />

                            </>
                        )}
                </AppStack.Navigator>
            )}
        </AuthContext.Consumer>
    )
}

const Navigation = () => {
    return (
        // <NavigationContainer>
        <AppScreen />
        // </NavigationContainer>
    )
}

export default Navigation;
