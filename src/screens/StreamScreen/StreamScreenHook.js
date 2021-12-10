import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import { BackgroundView, Text } from '../../components';
import { COLORS } from '../../themes/styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { getListGame } from '../../api';
import { mapIP } from '../../utils/common';
import PopularGames from './components/PopularGames';
import LiveGames from './components/LiveGames';
import { useDispatch, useSelector } from 'react-redux';
import { getRequestListGame } from '../../redux/thunk/gameThunkAction';
import { getListGameSelector } from '../../redux/selectors/gameSelector';

const StreamScreenHook = () => {

    //const [listGame, setListGame] = useState([]);
    const dispatch = useDispatch();
    // const listGame = useSelector( (state) => {
    //     console.log(state);
    //     return state.gameReducer.listGame
    // })
    const listGame = useSelector(getListGameSelector);

    useEffect( () => {
        // const fetchListGame = async() => {
        //     try {
        //         const result = await getListGame();
        //         console.log(result)
        //     }catch (error) {
        //         console.log(error)
        //     }
        // };
        // fetchListGame();
        // kieu viet IIFE
        // (async() => {
        //     try {
        //         const result = await getListGame();
        //         setListGame(mapIP(result.data));
                
        //     }catch (error) {
        //         console.log(error)
        //     }
        // })()
        dispatch(getRequestListGame)
    }, []);

    console.log(listGame)

    return (
        <BackgroundView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}> Streaming </Text>
                    <TextInput
                        style={styles.search}
                        placeholder="Search here"
                        placeholderTextColor = {COLORS.white}
                    />
                    <Icon name="search1" color={COLORS.opacityWhite} size={30}
                        style={{position:'absolute', top: 55, right: 15}}
                    />
                </View>
                <View style={styles.popularGameContainer}>
                    <Text style={{fontSize: 16}}>Popular Game</Text>
                    <FlatList 
                        data= {listGame}
                        renderItem = { ({item}) => <PopularGames gameItem={item} />}
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        style={{flexGrow: 0}}
                    />
                </View>
                <View style={styles.liveGameContainer}>
                    <Text style={{fontSize: 18}}>Live Game</Text>
                    <FlatList 
                        data= {listGame}
                        renderItem = { ({item}) => <LiveGames gameItem={item} />}
                        showsVerticalScrollIndicator = {false}
                    />
                </View>
            </View>
        </BackgroundView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    headerContainer: {
        flex: 1,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
    },
    search: {
        backgroundColor: COLORS.darkgray,
        padding: 10,
        borderRadius: 20,
        paddingRight: 40,
        marginVertical: 10
    },
    popularGameContainer: {
        flex: 1,
    },
    liveGameContainer: {
        flex: 3,
        
    }
})


export default StreamScreenHook
