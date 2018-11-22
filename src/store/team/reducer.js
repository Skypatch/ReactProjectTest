import state from './state'
import { TEAM_DATA, TEAM_CONTENT_DATA, TEAM_REQ_DATA, TEAM_URL, FINAL_DATA, CAR_DATA, CAR_DELECT, REL_CAR_DATA, REPLAYING_PAGE, CONTROL_ITEM_NUM, COUNT_ITEM_SUM } from './const'

const reducer = ( previousState = state, action ) => {
    //这里设置新状态
    let new_state = { ...previousState }
    //action是actionCreators发过来的action
    switch (action.type) {
        case TEAM_DATA:
            new_state.teamData = action.teamData
            break ;
        case TEAM_CONTENT_DATA:
            new_state.contentData = action.contentData
            break ;
        case TEAM_REQ_DATA:
            new_state.teamReqData = action.teamReqData
            break ;
        case TEAM_URL:
            new_state.urlData = action.urlData
            break ;
        case FINAL_DATA:
            new_state.confirmItem = action.confirmItem
            break ;
        case CAR_DATA:
            new_state.carData = action.carData
            break ;
        case CAR_DELECT:
            new_state.delect = action.delect
            break ;
        case REL_CAR_DATA:
            new_state.rel_data = action.rel_data
            break ;
        case REPLAYING_PAGE:
            new_state.replaying = action.replaying
            break ;
        case CONTROL_ITEM_NUM:
            new_state.controlNum = action.controlNum
            break ;
        case COUNT_ITEM_SUM:
            new_state.priceSum = action.priceSum
            break ;
        default: break ;
    }


    return new_state
}

export default reducer