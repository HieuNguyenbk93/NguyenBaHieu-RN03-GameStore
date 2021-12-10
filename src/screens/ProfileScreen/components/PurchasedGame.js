import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../../../components';
import { COLORS } from '../../../themes/styles';

export default class PurchasedGame extends Component {
    render() {
        const {gameItem} = this.props
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                        <Image
                            source={{uri: gameItem.icon}}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>{gameItem.title}</Text>
                        <Text>825 Sales</Text>
                    </View>
                </View>
                <Text style={styles.text} color={COLORS.lightPurple}>35$</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        width: '80%'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15,
        marginRight: 20,
    },
    text: {
        fontSize: 18,
    }
})
