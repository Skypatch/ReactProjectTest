import state from './state'
import { SHOP_CAR_ITEM } from './const'

const reducer = ( previousState = state, action ) => {
    //这里设置新状态
    let new_state = { ...previousState }
    //action是actionCreators发过来的action
    switch (action.type) {
        case SHOP_CAR_ITEM:
            new_state.carData = action.carData
            break ;
        default: break ;
    }


    return new_state
}

export default reducer