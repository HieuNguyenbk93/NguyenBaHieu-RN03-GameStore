import axios from "axios";
import { detectUrlByPlatform, mpapIP } from '../utils/common';

export const getListGame = () => {
    const baseUrl = detectUrlByPlatform();
    //return axios({method:'GET', url:'http://10.0.2.2:3000/games'})
    return axios({method:'GET', url:`http://${baseUrl}/games`})
}

export const getGameById = (id) => {
    const baseUrl = detectUrlByPlatform();
    return axios({
        method:'GET',
        url:`http://${baseUrl}/games/${id}`
    })
}