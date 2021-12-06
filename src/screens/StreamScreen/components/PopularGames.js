import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class PopularGames extends Component {
    render() {
        const {gameItem} = this.props;
        return (
            <View>
                <Image 
                    source={{uri: gameItem.icon}}
                    style={styles.container}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginRight: 20,
    }
})

