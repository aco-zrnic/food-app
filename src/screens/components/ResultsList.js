import React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultList = function(props){
    return(
        <View>
            <Text style={styles.textStyle}>{props.title}</Text>
            <FlatList
                data={props.data}
                keyExtractor={(result)=>result.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item})=>{
                    return <ResultsDetail result={item}/>
                }}
                />
        </View>
    )
}

const styles = StyleSheet.create({

    viewStyle:{
        paddingLeft:30
    },
    textStyle:{
        marginLeft:30,
        fontSize:18,
        fontWeight:'bold'
    }
})
export default ResultList;