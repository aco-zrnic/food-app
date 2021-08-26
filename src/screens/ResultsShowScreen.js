import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsShowScreen = function ({navigation}) {
    
    console.log(navigation.getParam('id'))
    return (
        <View>
            <Text>Result Show</Text>
        </View>
    )
}

export default ResultsShowScreen;