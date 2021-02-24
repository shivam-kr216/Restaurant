import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from './components/SearchBar';
import yelp from './api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');


    return (
        <View>
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
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;