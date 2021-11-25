import axios from 'axios'
import React, { Component } from 'react'
import { View, StyleSheet, Image, FlatList } from 'react-native'
import { BackgroundView, Text } from '../../components'
import { COLORS } from '../../themes/styles'
import { mapIP } from '../../utils/common'
import GameItem from './components/GameItem'

export default class HomeScreen extends Component {

    state = {
        gameDetail: {},
        loading: true,
    }

    componentDidMount(){
        axios({method:'GET', url:'http://10.0.2.2:3000/games'})
        .then(result => {
            console.log('===================',result.data);
            const listGame = mapIP(result.data);
            console.log('----------', listGame);
            this.setState({listGame, loading: false});
        })
        .catch(err => {
            console.log(err);
            this.setState({loading: false});
        });
    }

    render() {
        const { listGame, loading } = this.state;
        return (
            <BackgroundView>
                {!loading && (
                <>
                    <View style={styles.headerContainer}>
                        <View>
                            <Text style={styles.headerText}>
                                Hello <Text style={styles.fontBold}>CyberSoft</Text>
                            </Text>
                            <Text>Best game for today</Text>
                        </View>
                        <View style={styles.avatar}/>
                    </View>

                    <FlatList 
                        data= {listGame}
                        renderItem = { ({item}) => <GameItem gameItem={item}/>}
                    />
                </>
                )}
            </BackgroundView>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
    },
    fontBold: {
        fontWeight: '800'
    },
    avatar: {
        backgroundColor: COLORS.lightPurple,
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    banner: {
        width: '100%',
        height: 200,
    }
})
