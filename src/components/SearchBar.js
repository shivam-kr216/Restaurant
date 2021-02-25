import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={ false }
                term={term}
                onTextChange = { newTerm => onTermChange(newTerm) }
                style={styles.inputStyle}
                placeholder="Search"
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row' 
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;