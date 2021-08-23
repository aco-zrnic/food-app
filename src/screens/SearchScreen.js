import React ,{useState} from 'react'
import { Text, View, Alert} from 'react-native'
import SearchBar from './components/SearchBar'
import yelp from '../api/yelp'


async function SearchAPI(termInput) {
    try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: termInput,
                location: 'san jose'
            }
        });
        return response.data.businesses
    }
    catch (err) {
        console.log(err);
        Alert.alert('Error','Something went wrong!',
        [
            {
                text:'Ok',
                onPress: ()=>console.log('Ok button is pressed')
            }
        ])
    }
    return []
}

const SearchScreen = function(props){
    const [term,setTerm] = useState('')
    const [results,setResults]=useState([])

    return(
        <View>
           <SearchBar term={term} OnTermChange={(newTerm)=>{setTerm(newTerm)}}
                onTermSubmit={async ()=>{
                    console.log('termn was submited')
                    setResults(await SearchAPI(term))}}
           />
           <Text>We have found {results.length} results</Text>
        </View>)
}

export default SearchScreen;