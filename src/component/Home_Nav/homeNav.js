import React, { Component } from 'react'
import './homeNav.scss'
import { NavLink } from 'react-router-dom'

// 引入此路径，才不会打包失败
import Swiper from 'swiper/dist/js/swiper.js'

class HomeNav extends Component {
    constructor (props) {
        super (props)
    }
    componentDidMount () {
        new Swiper(this.container, {
            freeMode : true,
            slidesPerView : 4,
            spaceBetween : 20,
            setWrapperSize : true,
        })
    }
    renderNavList () {
        let { NavList } = this.props
        return (
            <div className="swiper-container"
            ref={ el => this.container = el }
            >
                <div className="swiper-wrapper">
                    {NavList.map(item => 
                        <div className="swiper-slide" key={ item.id }>
                            <i className='slide-cont'>
                                <span>{ item.cont }</span>
                                <span className='line'></span>
                            </i>
                            
                        </div>    
                    )}
                </div>
            </div>
        )
    }
    render () {
        return (
            <div className='homeNav-box'>
                { this.renderNavList() }
            </div>
        )
    }
}

HomeNav.defaultProps = {
    NavList: [
        {
            id: 1,
            cont: '首页',
            path: '/'
        },
        {
            id: 2,
            cont: '极速免税店',
            path: '/speed'
        },
        {
            id: 3,
            cont: '母婴',
            path: '/children'
        },
        {
            id: 4,
            cont: '轻奢',
            path: '/Mild'
        },
        {
            id: 5,
            cont: '名品特卖',
            path: '/sell'
        }
    ]
}

export default HomeNav
