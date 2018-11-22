import React, { Component } from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'

class AppFooter extends Component {
    constructor (props) {
        super (props)
    }
    renderFooter () {
        let { footerNavs } = this.props
        return (
            <ul className='list'>
                { footerNavs.map(item => 
                    <li key = { item.id }>
                        <NavLink 
                        to={ item.path }
                        exact = { item.exact }
                        >
                            <i className={ item.icon }></i>
                            <span>{ item.title }</span>
                        </NavLink>
                    </li>
                )}
            </ul>
        )
    }
    render () {
        return (
            <div className='footer-box'>
                { this.renderFooter() }
            </div>
        )
    }
}

//底部导航栏需要循环，本身是不变的，所以给它身上添加一些属性
AppFooter.defaultProps = {
    footerNavs: [
        {
            id: 1,
            icon: 'fa fa-home fa-fw',
            title: '首页',
            path: '/',
            exact: true
        },
        {
            id: 2,
            icon: 'fa fa-users fa-fw',
            title: '拼团',
            path: '/team',
            exact: false
        },
        {
            id: 3,
            icon: 'fa fa-shopping-bag fa-fw',
            title: '购物车',
            path: '/car',
            exact: false
        },
        {
            id: 4,
            icon: 'fa fa-user-o fa-fw',
            title: '我的',
            path: '/center',
            exact: false
        }
    ]
}

export default AppFooter
