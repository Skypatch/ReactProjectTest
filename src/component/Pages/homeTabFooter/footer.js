import React, { Component } from 'react'
import './footer.scss'
import footerbg from '../../../assets/footerImg/footerbg.jpg'
import { NavLink } from 'react-router-dom'


class Footer extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className='footer-container'>
                <img src={ footerbg } alt='客户端下载' />
                <div className='modelChange'>
                    <NavLink to='/' className='phone'>触屏版</NavLink>
                    <NavLink to='/' className='pc'>电脑版</NavLink>
                </div>
                <span className='copyright'>&copy; 2018 聚美优品 Jumei.com</span>
            </div>
        )
    }
}


export default Footer