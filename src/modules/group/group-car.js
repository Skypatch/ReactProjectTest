//这个是用来获取store里面的state

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/shopCar/actionCreators'

const GroupCar = connect(state => state.shopCar, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})

export default GroupCar