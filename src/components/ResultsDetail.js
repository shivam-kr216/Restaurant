import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text>{result.name}</Text>
            <Text>{result.rating} stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginLeft: 10
    },
    image: {
        width: 250,
        height: 200,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail;