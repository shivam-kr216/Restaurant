import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [SearchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => result.price===price)
    }

    return (
        <>
            <SearchBar term={term}
                onTermChange={newTerm => {
                    setTerm(newTerm);
                }}
                onTermSubmit={() => SearchApi(term)}
            />
            {errorMessage ?
                <Text>{errorMessage}</Text> :
                null
            }
            
            <ScrollView>
                <ResultList 
                    results={filterResultByPrice('$')} 
                    title="Cost Effective" 
                    //navigation={navigation}    
                />
                <ResultList 
                    results={filterResultByPrice('$$')} 
                    title="Bit Pricer" 
                    //navigation={navigation}  
                />
                <ResultList 
                    results={filterResultByPrice('$$$')} 
                    title="Bit Spender" 
                    //navigation={navigation}      
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    
});

export default SearchScreen;