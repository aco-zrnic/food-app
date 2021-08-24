import React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';



const ResultList = function(props){

    return(
        <View>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text>{props?.data?.length}</Text>
            <FlatList
                data={props.data}
                keyExtractor={(result)=>result.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item})=>{
                    return <Text>{item.name}  ;</Text>
                }}
                />
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