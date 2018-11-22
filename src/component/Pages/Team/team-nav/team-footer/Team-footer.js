import React, { Component } from 'react'
import './team-footer.scss'

import { GroupTeam } from '../../../../../modules/group'

//创建组件
class Teamfooter extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className='team-f-box'>
                <p>已到当前页面最底部，看看其他页面吧~</p>
            </div>
        )
    }
}

export default GroupTeam(Teamfooter)
