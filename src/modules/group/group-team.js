//这个是用来获取store里面的state

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/team/actionCreators'

const GroupTeam = connect(state => state.team, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})

export default GroupTeam