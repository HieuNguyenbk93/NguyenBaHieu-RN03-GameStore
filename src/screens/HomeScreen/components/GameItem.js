import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text } from '../../../components';
import { navigate } from '../../../navigation/root-navigation';
import { ScreenName } from '../../../utils/constants';

export default class GameItem extends Component {
    render() {
        const { gameItem, onPress } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.9} style={{alignItems: 'center', marginBottom: 80,}}
                //onPress={onPress} 
                onPress={()=> navigate(ScreenName.detail, {id: gameItem.id})}
            >
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
            </TouchableOpacity>
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
