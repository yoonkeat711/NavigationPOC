import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Welcome = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
                <TouchableOpacity>
                    <Text style={{fontSize: 16}}>Click here</Text>
                </TouchableOpacity>
          ),
        });
      }, [navigation]);

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
            <Text>Welcome</Text>
        </View>
    )
}

export default Welcome;