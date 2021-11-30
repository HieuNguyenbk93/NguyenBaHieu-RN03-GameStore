import { FETCHING_DATA, FETCHING_DATA_FAIL, FETCHING_DATA_SUCCESS, SET_GAME_DETAIL, SET_LIST_GAME } from "../actios/gameActions";

const initalState = {
    listGame: [],
    gameDetail: {},
    isFetching: false,
}

const gameReducer = (state = initalState, {type, payload}) => {
    switch (type) {
        case FETCHING_DATA:
            return {...state, isFetching: true}
        case FETCHING_DATA_FAIL:
            return {...state, isFetching: false}
        case FETCHING_DATA_SUCCESS:
            return {...state, isFetching: false}
        case SET_LIST_GAME:
            state.listGame = payload;
            return {...state};

        case SET_GAME_DETAIL:
            state.gameDetail = payload;
            return {...state};

        default:
            return state;
    }
}

export default gameReducer;