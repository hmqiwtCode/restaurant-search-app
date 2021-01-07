import React, {useState} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";


const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [fetchYelpApi,results,errorMessage] = useResults();

    console.log(results.length)
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };

    return (
        <View style={{flex:1}}>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit= {() => fetchYelpApi(term)} />
           
            <ScrollView>
                <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
            
        </View>
    );
}

//rnstyle
const styles = StyleSheet.create({
      
});

export default SearchScreen;
