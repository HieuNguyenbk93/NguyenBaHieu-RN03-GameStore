import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> HomeScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

