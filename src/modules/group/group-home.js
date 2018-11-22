//这个是用来获取store里面的state

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/homeItems/actionCreators'

const GroupHome = connect(state => state.homeItems, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})

export default GroupHome