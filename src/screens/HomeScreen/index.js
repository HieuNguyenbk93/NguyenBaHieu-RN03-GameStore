import axios from 'axios'
import React, { Component } from 'react'
import { View, StyleSheet, Image, FlatList } from 'react-native'
import { BackgroundView, Text } from '../../components'
import { COLORS } from '../../themes/styles'
import GameItem from './components/GameItem'
import Entypo from 'react-native-vector-icons/Entypo'
import { ScreenName } from '../../utils/constants'
import { connect } from 'react-redux'
import { getRequestListGame } from '../../redux/thunk/gameThunkAction'

class HomeScreen extends Component {

    componentDidMount(){
        // this.props.getRequest();
        // getListGame()
        // .then(result => {
        //     const listGame = mapIP(result.data);
        //     this.props.setListGame(listGame);
        //     this.props.getRequestSuccess();
        // })
        // .catch(err => {
        //     this.props.getRequestFail();
        //     console.log(err);
        // });
        this.props.getRequestListGame();
    }

    render() {
        const { listGame } = this.props;
        return (
            <BackgroundView>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.headerText}>
                            Hello <Text style={styles.fontBold}>CyberSoft</Text>
                        </Text>
                        <Text>Best game for today</Text>
                    </View>
                    <View style={styles.avatar}>
                        <Entypo name='user' size={26}/>
                    </View>
                </View>

                <FlatList 
                    data= {listGame}
                    renderItem = { ({item}) => <GameItem gameItem={item} />}
                    showsVerticalScrollIndicator = {false}
                />
            </BackgroundView>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRequestListGame: () => dispatch(getRequestListGame()),
    }
};

const mapStatesToProps = state => {
    return {
        listGame: state.gameReducer.listGame,
        isFetching: state.gameReducer.isFetching,
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(HomeScreen);

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