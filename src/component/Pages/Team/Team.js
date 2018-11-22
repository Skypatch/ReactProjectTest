import React, { Component } from 'react'
import './team.scss'
import Teamnav from './team-nav/Team-nav'

import { GroupTeam } from '../../../modules/group'

import { Route } from 'react-router-dom'

import Details from '../itemDetails/details'

//创建组件
class Team extends Component {
    constructor (props) {
        super (props)
    }
    componentWillMount () {
        this.props.getTeamContentData()
    }
    outPut () {
        let { pathname } = this.props.location
        if (pathname === '/team') {
            return <Teamnav></Teamnav>
        } else {
            return ''
        }
    }
    render () {
        return (
            <div className='team-box'>
                <Route path='/team/detail' component={ Details }></Route>
                { this.outPut() }  
            </div>
        )
    }
}

export default GroupTeam(Team)
