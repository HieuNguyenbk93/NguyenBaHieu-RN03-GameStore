import {Platform} from 'react-native'

export const mapIP = result => {
    // let gameDetail = result.data;
    // let icon = gameDetail.icon.replace('localhost', '10.0.2.2');
    // let preview = gameDetail.preview.map(
    //     item => item.replace('localhost', '10.0.2.2')
    // );
    // return {
    //     ...gameDetail,
    //     icon,
    //     preview,
    // }
    if (Platform.OS === 'android') {
        if (Array.isArray(result)){
            return result.map( gameItem => {
                const icon = gameItem.icon.replace('localhost', '10.0.2.2');
                const preview = gameItem.preview.map( item =>
                    item.replace('localhost', '10.0.2.2')
                );
                return {...gameItem, icon, preview}
            })
        }

        const icon = result.icon.replace('localhost', '10.0.2.2');
        const preview = gameItem.preview.map( item =>
            item.replace('localhost', '10.0.2.2')
        );
        return {...result, icon, preview};
    }
    return result;
}