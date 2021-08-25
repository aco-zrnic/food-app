import React from 'react';
import { Text,View, Image, StyleSheet } from 'react-native';

const ResultsDetail = function({result}){
    console.log(result.image_url)
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{uri:result.image_url}}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.statsStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    imageStyle:{
        height:200,
        width:250,
        borderRadius:5,
        marginVertical:10
    },
    nameStyle:{
        fontWeight: 'bold',
        fontSize:15,
        width:270
    },
    statsStyle:{
        color:'#C3BFB6'
    },
    viewStyle:{
        height:300,
        width:300,
        marginLeft:30
    }
})
export default ResultsDetail;