import React,{useEffect, useState}from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import yelp from '../api/yelp'
/*
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
*/
const ResultsShowScreen = function ({route,navigation}) {
    console.log(route.params.res.alias)
    //navigation.setOptions({title:route.params.shopInfo.alias})
    /*
    const id = route.params.id
    console.log(route)
    const[shopInfo,setShopInfo]=useState(null)


    const searchAPI=async()=> {
        try {
            const res = await yelp.get('/'+id);
            setShopInfo(res.data)
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

    */
    useEffect(()=>{
        navigation.setOptions({title:route.params.res.alias})
    },[])
    
    return (
        <View>
            <Text>Text</Text>
        </View>
    )
}

export default ResultsShowScreen;