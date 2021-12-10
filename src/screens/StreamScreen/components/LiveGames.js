import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/styles';
import { Text } from '../../../components';

export default class LiveGames extends Component {
    render() {
        const {gameItem} = this.props;
        return (
            <View style={{margin:10}}>
                <View style={{flexDirection:'row', position: 'absolute', top:5, right: 5, zIndex:1,}}>
                    <Text style={[styles.text, {backgroundColor: COLORS.lightPurple}]}>{gameItem.title}</Text>
                    <Text style={[styles.text, {backgroundColor: COLORS.lightRed}]}>Live</Text>
                </View>
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
    },
    text: {
        fontSize: 16,
        borderRadius: 5,
        padding: 3,
        marginRight: 5,
    },
})
