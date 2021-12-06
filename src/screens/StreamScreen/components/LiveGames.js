import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class LiveGames extends Component {
    render() {
        const {gameItem} = this.props;
        return (
            <View style={{margin:10}}>
                <Image 
                    source={{uri: gameItem.preview[0]}}
                    style={styles.container}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        borderRadius: 20,
    }
})
