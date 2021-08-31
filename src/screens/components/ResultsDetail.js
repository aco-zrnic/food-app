import React,{useState} from 'react';
import { Text,View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import yelp from '../../api/yelp';

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


const ResultsDetail = function({loading,result}){
    const[shopInfo,setShopInfo]=useState(null)
    const navigation = useNavigation();

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity
                onPress={async()=>{
                    loading(true)
                    const res= await SearchAPI(result.id)
                    setShopInfo(res)
                    navigation.navigate('SingleShop',{res})
                    }}>
                <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
                <Text style={styles.nameStyle}>{result.name}</Text>
                <Text style={styles.statsStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
            </TouchableOpacity>
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
export default (ResultsDetail);