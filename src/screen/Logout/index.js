import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthContext from './../../AuthContext';

const Logout = ({ navigation, route }) => {
    return (
        <AuthContext.Consumer>
        {({ login, setLogin }) => (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{login ? "login" : "logout"}</Text>
                <TouchableOpacity onPress={() => setLogin(!login)} style={{ backgroundColor: 'green', marginTop: 20 }}>
                    <Text>{login ? "Press to logout" : "Press to login"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={{ backgroundColor: 'green', marginTop: 20 }}>
                    <Text>{"Navigate to Welcome"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{ backgroundColor: 'green', marginTop: 20 }}>
                    <Text>{"Navigate to Dashboard"}</Text>
                </TouchableOpacity>
            </View>
        )}
        </AuthContext.Consumer>
    )
}

export default Logout;
