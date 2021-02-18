import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from './components/SearchBar';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return (
        <View>
            <SearchBar term={term}
                onTermChange = { newTerm => {
                    setTerm(newTerm);
                }}
                onTermSubmit = {() => console.log('Term Submitted')} 
            />
            <Text>Search Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;