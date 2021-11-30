import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { getGameById } from '../../api';
import { BackgroundView } from '../../components';
import { mapIP } from '../../utils/common';
import GameItem from '../HomeScreen/components/GameItem';
import { Text } from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../../themes/styles';
import { setGameDetail, getRequest, getRequestFail, getRequestSuccess } from '../../redux/actios/gameActions';
import { connect } from 'react-redux';

class DetailScreen extends Component {

    componentDidMount() {
        this.props.getRequest();
        getGameById(this.props.route.params.id)
        .then(res => {
            const game = mapIP(res.data);
            console.log('--game--', game);
            this.props.setGameDetail(game);
            this.props.getRequestSuccess();
        })
        .catch(err => {
            this.props.getRequestFail();
            console.log(err)
        });
    }

    renderStart = () => {
        let listStar = [];
        for (let index = 1; index <=5; index++){
            const color = Math.round(this.props.game.rating) >= index ? COLORS.lightPurple : COLORS.gray;
            listStar.push(<FontAwesome key={index} name="star" size={16} color={color} />)
        }
        listStar.push(<Text key={'Text'} style={{marginLeft: 10}}>{this.props.game.rating}</Text>);
        return listStar;
    }

    render() {
        const {navigation, game} = this.props;
        console.log(game);
        if (this.props.isFetching || !game.title) {
            return (
                <BackgroundView>
                    <Text>Loading...</Text>
                </BackgroundView>
            )
        }
        return (
            <BackgroundView>
                <Image
                    source= {{uri: game.preview[0]}}
                    style = {styles.bannerContainer}
                />
                <TouchableOpacity
                    style={styles.iconBack}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name="close" color={COLORS.white} size={25} />
                </TouchableOpacity>
                <View style={styles.gameInfo}>
                    <Image 
                        source={{uri: game.icon}}
                        style={{height: 70, width: 70, borderRadius: 15}}
                    />
                    <View style={{width: '65%', marginLeft: 10}}>
                        <Text style={styles.fontBold}>{game.title}</Text>
                        <Text>{game.subTitle}</Text>
                    </View>
                    <View style={{backgroundColor: COLORS.lightPurple, padding:10,borderRadius:30}}>
                        <FontAwesome name="cloud-download" color={COLORS.white} size={25}/>
                    </View>
                </View>
                <View style={styles.inforContent}>
                    <View style={styles.starContent}>{this.renderStart()}</View>
                    <Text>{game.age}</Text>
                    <Text>Game for the day</Text>
                </View>
                <View style={styles.preview}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingRight: 15}}
                        style={styles.listPreview}
                        snapToInterval={350}
                        data={game.preview}
                        renderItem= { ({item}) => (
                            <Image source={{uri: item}} style={styles.previewItem}/>
                        )}
                    />
                    <Text subTitle>{game.description}</Text>
                </View>
            </BackgroundView>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setGameDetail: game => dispatch(setGameDetail(game)),
    getRequest: () => dispatch(getRequest()),
    getRequestFail: () => dispatch(getRequestFail()),
    getRequestSuccess: () => dispatch(getRequestSuccess()),
});

const mapStatesToProps = state => ({
    game: state.gameReducer.gameDetail,
    isFetching: state.gameReducer.isFetching,
})

export default connect(mapStatesToProps,mapDispatchToProps)(DetailScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerContainer: {
        height: '30%',
        width: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    fontBold: {
        fontWeight: '900',
        fontSize: 16,
    },
    gameInfo: {
        padding: 10,
        paddingVertical: 20,
        borderRadius: 8,
        flexDirection: 'row',
        
        alignItems: 'center',
    },
    inforContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    starContent: {
        flexDirection: 'row',
    },
    listPreview: {
        flexGrow: 0,
        marginRight: -15,
    },
    preview: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    previewItem: {
        width: 350,
        height: 200,
        borderRadius: 10,
        marginRight: 15,
    },
    iconBack: {
        backgroundColor: COLORS.opacityBlack,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        left: 10,
        width:40,
        height: 40,
    },
})
