//这个是用来获取store里面的state

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/common/actionCreators'

const GroupCommon = connect(state => state.common, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})

export default GroupCommon