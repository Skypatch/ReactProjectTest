import { combineReducers } from 'redux'
import common from './common/reducer'
import shopCar from './shopCar/reducer'
import homeItems from './homeItems/reducer'
import team from './team/reducer'

const reducer = combineReducers({
    common, shopCar, homeItems, team
})

export default reducer