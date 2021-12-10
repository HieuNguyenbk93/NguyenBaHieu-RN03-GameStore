import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from '../../components';
import { connect } from 'react-redux'
import { BackgroundView } from '../../components';
import PurchasedGame from './components/PurchasedGame';
import { COLORS } from '../../themes/styles';

class ProfileScreen extends Component {
    render() {
        const {listGame} = this.props;
        return (
            <BackgroundView>
                <View style={styles.container}>
                    <View style={{width: 80, height: 80, backgroundColor: '#fff', borderRadius: 40, }}/>
                    <Text style={styles.size18}> CyberSoft</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.tag, {backgroundColor: COLORS.lightPurple}]}>Pro Gamer</Text>
                        <Text style={[styles.tag, {backgroundColor: COLORS.lightYellow}]} color={COLORS.black}>Pro Coder</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginVertical:10, alignItems:'flex-end'}}>
                        <Text style={styles.textBig} >250</Text>
                        <Text style={styles.textSmall} color={COLORS.gray}>Games</Text>
                        <Text style={styles.textBig} >4</Text>
                        <Text style={styles.textSmall} color={COLORS.gray}>Purchases</Text>
                    </View>
                    
                </View>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text style={styles.size18}>Purchased Games</Text>
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
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    size18: {
        fontSize: 20
    },
    tag:{
        borderRadius: 5,
        marginHorizontal:5,
        padding: 5,
        paddingHorizontal: 10,
    },
    textBig: {
        fontSize: 24,
    },
    textSmall: {
        marginLeft: 5,
        marginRight: 10,
    }
})
