import React from 'react'
import { Text, View , StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = function(props){

    return(
        <View style={styles.backgroudView}>
            <Feather name="search" size={35} color="black" style={styles.featherStyle} />
            <TextInput style={styles.textInputStyles} autoCapitalize='none' autoCorrect={false} placeholder='Search' placeholderTextColor='#C3BFB6'
                value={props.term}
                onChangeText={(newTerm)=>{props.OnTermChange(newTerm)}}
                onEndEditing={()=>{props.onTermSubmit()}}
            />
        </View>)
}

const styles= StyleSheet.create({
    featherStyle:{
        marginLeft:5,
        marginRight:5,
        alignSelf:'center'
    },
    textInputStyles:{
        flex:1,
        fontSize:18
    },
    backgroudView:{
        flexDirection:'row',
        backgroundColor:'#F0EEEE',
        borderRadius:5,
        marginHorizontal:30,
        marginVertical:20,
        height:50
    }
})
export default SearchBar;