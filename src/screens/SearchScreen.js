import React ,{useState, useEffect} from 'react'
import { Text, View, Alert, ScrollView, ActivityIndicator, StyleSheet} from 'react-native'
import SearchBar from './components/SearchBar'
import ResultList from './components/ResultsList'
import yelp from '../api/yelp'


async function SearchAPI(termInput) {
    try {
        const response = await yelp.get('/search', {
            params: {
                limit: 40,
                term: termInput,
                location: 'los angeles'
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
    if(businesses instanceof Array && businesses.length>0){
        console.log(businesses.length)
        return businesses.filter(business=>{return business.price==price})
    }  
    
}
const SearchScreen = function ({navigation}) {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        SearchAPI(term).then(response => { setResults(response) })
    }, [])

    useEffect(()=>{
        navigation.addListener('focus', () => {
            setLoading(false)
          });
    },[isLoading])
    return (
        <View style={{ flex: 1 }}>
            <SearchBar term={term} OnTermChange={(newTerm) => { setTerm(newTerm) }}
                onTermSubmit={async () => {
                    console.log('termn was submited')
                    setResults(await SearchAPI(term))
                }}
            />
            <ScrollView>
                <ResultList title='Cost Effective' loading={setLoading} data={filterResultByPrice(results, "$")} />
                <ResultList title='Bit Pricier' loading={setLoading} data={filterResultByPrice(results, "$$")} />
                <ResultList title='Big Spender!' loading={setLoading} data={filterResultByPrice(results, "$$$")} />
            </ScrollView>
            {isLoading && <ActivityIndicator style={style.activityIndicatorStyle} size="large" color="#0000ff" />}
        </View>)
}

const style=StyleSheet.create({

    activityIndicatorStyle:{
        position: 'absolute', 
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    }
})


export default SearchScreen;