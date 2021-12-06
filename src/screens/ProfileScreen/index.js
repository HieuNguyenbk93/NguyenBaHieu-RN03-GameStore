import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from '../../components';
import { connect } from 'react-redux'
import { BackgroundView } from '../../components';
import PurchasedGame from './components/PurchasedGame';

class ProfileScreen extends Component {
    render() {
        const {listGame} = this.props;
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <View style={{width: 80, height: 80, backgroundColor: '#fff', borderRadius: 40}}/>
                    <Text style={styles.size18}> Purchased Games </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Pro Gamer</Text>
                        <Text>Pro Coder</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>250</Text>
                        <Text>Games</Text>
                        <Text>4</Text>
                        <Text>Purchases</Text>
                    </View>
                    <Text style={styles.size18}>Purchased Games</Text>
                </View>
                <View>
                    <FlatList
                        data= {listGame}
                        renderItem = { ({item}) => <PurchasedGame gameItem={item} />}
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
            </BackgroundView>
        )
    }
}

const mapStatesToProps = state => {
    return {
        listGame: state.gameReducer.listGame,
        isFetching: state.gameReducer.isFetching,
    }
};

export default connect(mapStatesToProps)(ProfileScreen)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    size18: {
        fontSize: 18
    }
})
