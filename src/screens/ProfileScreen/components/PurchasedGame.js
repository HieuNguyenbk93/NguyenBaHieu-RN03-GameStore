import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../../../components';

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
                        <Text style={styles.fontSize}>{gameItem.title}</Text>
                        <Text>825 Sales</Text>
                    </View>
                </View>
                <Text style={styles.fontSize}>35$</Text>
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
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15,
        marginRight: 20,
    },
    fontSize: {
        fontSize: 18,
    }
})
