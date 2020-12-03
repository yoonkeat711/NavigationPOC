import React, {Component} from 'react';
import { View, Text } from 'react-native';

class Details extends Component {
    componentDidMount() {
        // this.props.navigation.setOptions({
            this.props.navigation.setOptions({
                headerShown: null,
              });
    }
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.route.params.name}</Text>
            </View>
        )
    }
}

export default Details;
