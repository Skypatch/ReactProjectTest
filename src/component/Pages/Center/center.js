import React, { Component } from 'react'
import './center.scss'

import Login from './login/login'
import User from './user/user'
import Register from './register/register'


import { GroupCommon } from '../../../modules/group'

import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

//创建组件
class Center extends Component {
    constructor (props) {
        super (props)
    }
    componentWillReceiveProps (props) {
        let { userInfo } = props
        //如果有传入props参数，说明是当前的props,如果不传入，表示的是上一个状态的属性

        //当我们点击了退出按钮之后，我们当前props 和 this.props这两个数据就会变得不同
        let { pathname } = props.location
        if (props.userInfo !== this.props.userInfo || pathname === '/center') {
            this.checkLogin(props)
        }

        // this.checkLogin()
    }
    componentWillMount () {
        //组件一出现就要去验证userInfo是否有传入
        this.checkLogin()
    }
    checkLogin (props) {
        let { userInfo } = (props || this.props)
        let { replace } = this.props.history
        //路由跳转
        if (userInfo) {
            //如果有数据传入，说明登录信息已经有了，页面就可以跳转到/center/user了
            replace('/center/user')
        } else {
            //如果不存在数据，那就到登录页面
            replace('/center/login')
        }
    }
    render () {
        // console.log(this.props.userInfo)
        return (
            <div className='center-box'>    
                <Route path='/center/login' component={ Login }></Route>
                <Route path='/center/user' component={ User }></Route>
                <Route path='/center/register' component={ Register }></Route>
            </div>
        )
    }
}

export default GroupCommon( Center )
