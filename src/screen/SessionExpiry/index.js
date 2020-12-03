import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SessionExpiry extends Component {
    componentDidMount() {
        // this.props.navigation.setOptions({
            this.props.navigation.setOptions({
                // headerShown: null,
                headerRight: () => {<TouchableOpacity onPress={() => this.props.navigation.goBack()} ><Text>Back</Text></TouchableOpacity>}
               });
    }
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Session Expired</Text>
            </View>
        )
    }
}

export default SessionExpiry;