import React from 'react'
import { Text, View , StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = function(props){

    return(
        <View style={styles.backgroudView}>
            <Feather name="search" size={30} color="black" style={styles.featherStyle} />
            <TextInput style={styles.textInputStyles} autoCapitalize='false' autoCorrect={false} placeholder='Search' placeholderTextColor='#C3BFB6'/>
        </View>)
}

const styles= StyleSheet.create({
    featherStyle:{
        marginLeft:5,
        marginRight:5,
    },
    textInputStyles:{
        flex:1,
        borderColor:'#000000',
        borderWidth:1,
        height:40
    },
    backgroudView:{
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#F0EEEE',
        borderRadius:5,
        margin:30,
        height:50
    }
})
export default SearchBar;