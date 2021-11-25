import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text } from '../../../components';

export default class GameItem extends Component {
    render() {
        const { gameItem } = this.props;
        return (
            <View style={{alignItems: 'center', marginBottom: 80,}}>
                <Image
                    source={{uri: gameItem.preview[0]}}
                    style={{width: '100%', height: 200,}}
                />
                <View style={[styles.gameInfo, {backgroundColor: gameItem.backgroundColor}]}>
                    <Image 
                        source={{uri: gameItem.icon}}
                        style={{height: 50, width: 50, borderRadius: 15}}
                    />
                    <View style={{width: '80%', marginLeft: 10}}>
                        <Text style={styles.fontBold}>{gameItem.title}</Text>
                        <Text>{gameItem.subTitle}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gameInfo: {
        width: '90%',
        padding: 10,
        paddingVertical: 20,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: -50,
    },
    icon: {
    },
    fontBold: {
        fontWeight: '900',
        fontSize: 16,
    },
})
