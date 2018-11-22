import state from './state'
import { HOME_ITEMS_TODAY_DATA, HOME_ITEMS_TOMORROW_DATA } from './const'

const reducer = ( previousState = state, action ) => {
    //这里设置新状态
    let new_state = { ...previousState }
    //action是actionCreators发过来的action
    switch (action.type) {
        case HOME_ITEMS_TODAY_DATA:
            new_state.homeTodayData = action.homeTodayData
            break ;
        case HOME_ITEMS_TOMORROW_DATA:
            new_state.homeTomorrowData = action.homeTomorrowData
            break ;
        default: break ;
    }

    return new_state
}

export default reducer