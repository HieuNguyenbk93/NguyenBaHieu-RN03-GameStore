import React, { Component } from 'react'
import { StyleSheet, TextInput, FlatList, View } from 'react-native';
import { Text } from '../../components';
import { connect } from 'react-redux';
import { BackgroundView } from '../../components';
import PopularGames from './components/PopularGames';
import LiveGames from './components/LiveGames';

class StreamScreen extends Component {
    render() {
        const { listGame, isFetching } = this.props;
        return (
            <BackgroundView style={styles.container}>
                <Text style={styles.textHeader}> Streaming </Text>
                <TextInput
                    placeholder="Search here"
                    style={styles.searchButton}
                />
                <Text>Popular Games</Text>
                <View>
                    <FlatList 
                        data= {listGame}
                        renderItem = { ({item}) => <PopularGames gameItem={item} />}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                    />
                </View>
                <Text style={styles.textLiveGame}>Live Games</Text>
                <View>
                    <FlatList 
                        data= {listGame}
                        renderItem = { ({item}) => <LiveGames gameItem={item} />}
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
            </BackgroundView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    textHeader: {
        fontSize: 30,
        marginVertical: 10,
    },
    searchButton: {
        backgroundColor: '#52595D',
        paddingHorizontal: 20,
        marginHorizontal: 30,
        borderRadius: 20,
    },
    textLiveGame : {
        fontSize: 20,
    }
})

const mapStatesToProps = state => {
    return {
        listGame: state.gameReducer.listGame,
        isFetching: state.gameReducer.isFetching,
    }
};


export default connect(mapStatesToProps)(StreamScreen)