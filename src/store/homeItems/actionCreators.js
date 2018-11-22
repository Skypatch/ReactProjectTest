import axios from 'axios'
import { HOME_ITEMS_TODAY_DATA } from './const'

const actionCreators  = {
    //这里放很多方法
    getHomeListData () {
        // https://m.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=2&platform=wap&type=formal&page_key=1542367320
        return dispatch => {
            axios.get('/jm/index/ajaxDealactList',{
                params: {
                    card_id: 4057,
                    client_v: 1,
                    page: 2,
                    platform: 'wap',
                    type: 'formal',
                    page_key: 1542367320
                }
            }).then(res => {
                console.log(res)
                dispatch({
                    type: HOME_ITEMS_TODAY_DATA,
                    homeTodayData: 1
                })
            })
        }
    }
}


export default actionCreators