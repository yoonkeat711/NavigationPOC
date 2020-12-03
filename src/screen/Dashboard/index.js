import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

class Dashboard extends Component {
componentDidMount() {
    // this.props.navigation.setOptions({
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity>
                    <Text style={{fontSize: 16}}>Click here</Text>
                </TouchableOpacity>
            ),
            title: 'Custom Dashboard',
            headerTitleStyle: {fontSize: 20}
          });
}


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Dashboard</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {name:  "keat", id: "00139999"})} style={{ backgroundColor: 'green', marginTop: 20 }}>
                    <Text>{"Navigate to Details"}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Dashboard;
