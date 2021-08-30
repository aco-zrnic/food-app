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


    useEffect(()=>{
        searchAPI().then(
        navigation.setOptions({title:shopInfo.alias}))
    },[])
    
    return (
        <View>
            {shopInfo instanceof Object &&
             <Button title='XDS' onPress={()=>{navigation.setOptions({title:shopInfo.alias})}}/>
             }
        </View>
    )
}

export default ResultsShowScreen;