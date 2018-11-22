import React, { Component } from 'react'
import './home.scss'
import Search from '../../Home_Search/search'
import Homenav from '../../Home_Nav/homeNav'
import Tab from '../../homeTab/homeTab'
import Footer from '../homeTabFooter/footer'

import { GroupHome } from '../../../modules/group'

//创建组件
class Home extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className='home-box'>
                <Search></Search>
                <Homenav></Homenav>
                <Tab></Tab>
                <Footer></Footer>
            </div>
        )
    }
}

export default GroupHome(Home)
