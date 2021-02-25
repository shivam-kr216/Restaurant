import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from './api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    //Used to fetch the id as a query-string from another page
    const id = navigation.getParams('id'); 

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if(!result) {
        return null;
    }

    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 200
    }
})

export default ResultsShowScreen;