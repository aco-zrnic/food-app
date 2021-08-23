import React ,{useState} from 'react'
import { Text, View} from 'react-native'
import SearchBar from './components/SearchBar'
import yelp from '../api/yelp'


async function SearchAPI (termInput){
    console.log(termInput)
    const response= await yelp.get('/search',{
        params: {
            limit:50,
            term : termInput,
            location: 'san jose'
        }
    });
    return response.data.businesses
}

const SearchScreen = function(props){
    const [term,setTerm] = useState('')
    const [results,setResults]=useState([])

    





    return(
        <View>
           <SearchBar term={term} OnTermChange={(newTerm)=>{setTerm(newTerm)}}
                onTermSubmit={()=>{
                    console.log('termn was submited')
                    let temp= await SearchAPI(term)
                    setResults( temp)}}
           />
           <Text>We have found {results.length} results</Text>
        </View>)
}

export default SearchScreen;