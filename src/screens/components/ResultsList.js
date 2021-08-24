import React from 'react';
import { Text, View, StyleSheet } from 'react-native';



const ResultList = function(props){

    console.log(props.data)

    return(
        <View>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    textStyle:{
        fontSize:18,
        fontWeight:'bold'
    }
})
export default ResultList;