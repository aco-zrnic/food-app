import React ,{useState, useEffect} from 'react'
import { Text, View, Alert} from 'react-native'
import SearchBar from './components/SearchBar'
import ResultList from './components/ResultsList'
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
                onPress: ()=>console.log('Ok button is pressed, Error happened')
            }
        ])
    }
    return []
}
const filterResultByPrice = function(businesses, price){
    //price == '$' || '$$' || '$$$'
    console.log(businesses.price)
}
const SearchScreen = function(props){
    const [term,setTerm] = useState('')
    const [results,setResults]=useState([])

    useEffect(()=>{
        setResults(SearchAPI(term).then(response=>{setResults(response)}))
        filterResultByPrice(results,'$')
    },[])

    return(
        <View>
           <SearchBar term={term} OnTermChange={(newTerm)=>{setTerm(newTerm)}}
                onTermSubmit={async ()=>{
                    console.log('termn was submited')
                    setResults(await SearchAPI(term))}}
           />
           <Text>We have found {results.length} results</Text>
           <ResultList title='Cost Effective' />
           <ResultList title='Bit Pricer' />
           <ResultList title='Big Spender!'/>
        </View>)
}

export default SearchScreen;