import React,{useEffect, useState}from 'react';
import { Text, View, StyleSheet } from 'react-native';
import yelp from '../api/yelp'

async function SearchAPI(id) {
    try {
        const response = await yelp.get('/'+id);
        return response.data;
    }
    catch (err) {
        console.log(err);
        Alert.alert('Error','Something went wrong!',
        [
            {
                text:'Ok',
                onPress: ()=>console.log('Ok button is pressed, Error happened')
            }
        ])
    }
}

const ResultsShowScreen = function ({navigation}) {
    
    const[shopInfo,setShopInfo]=useState(null)

    console.log(navigation.getParam('id'))
    const id = navigation.getParam('id')

    useEffect(()=>{
        SearchAPI(id).then(response=>{setShopInfo(response)})
    },[])
    return (
        <View>
            {shopInfo instanceof Object && <Text>{shopInfo.alias}</Text>}
        </View>
    )
}

export default ResultsShowScreen;