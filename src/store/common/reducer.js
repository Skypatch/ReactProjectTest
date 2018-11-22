import state from './state'
import { CHANGE_USER_INFO, REGISTER_USER_INFO } from './const'

const reducer = ( previousState = state, action ) => {
    //这里设置新状态
    let new_state = { ...previousState }
    //action是actionCreators发过来的action
    switch (action.type) {
        case CHANGE_USER_INFO:
            new_state.userInfo = action.userInfo
            break ;
        case REGISTER_USER_INFO:
            new_state.registerInfo = action.registerInfo
            break ;
        default: break ;
    }
    return new_state
}

export default reducer