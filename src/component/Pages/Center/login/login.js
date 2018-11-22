import React, { Component } from 'react'
import './login.scss'
import { GroupCommon } from '../../../../modules/group'

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'

//创建组件
class Login extends Component {
    constructor (props) {
        super (props)
        // this.login = this.login.bind( this )
        this.toRegister = this.toRegister.bind(this)
        this.backPrev = this.backPrev.bind(this)
        this.login = this.login.bind(this)
    }
    loadingToast() {
        Toast.loading('Loading...', 1.5, () => {
          
        })
    }
    successToast() {
        Toast.success('登录成功！', 1.5);
    }
    failToast() {
        Toast.fail('用户名或者密码不正确！', 1.5);
    }
    backPrev () {
        let { goBack } = this.props.history
        goBack()
    }
    toRegister () {
        let { replace } = this.props.history
        replace('/center/register')
    }
    renderTop () {
        return (
            <div className='top'>
                <button
                className='back'
                onClick={ this.backPrev }
                >
                    <i className='fa fa-chevron-left'></i>
                </button>
                <span className='top-cont'>登录</span>
                <button
                className='register'
                onClick={ this.toRegister }
                >
                    <span>注册</span>
                </button>    
            </div>
        )
    }
    renderLoginMain () {
        return (
            <div className='login-container'>
                <div className='phone-login'>
                    <span>手机登录</span>
                </div>
                <div className='phoneNum'>
                    <input type='text' placeholder='请输入11位手机号'
                    ref={ el => this.userPhone = el }
                    />
                </div>
                <div className='code'>
                    <input type='password' placeholder='请输入密码'
                    ref={ el => this.userCode = el }
                    />
                </div>
                <button className='login'
                onClick={ this.login }
                >
                    登录
                </button>
            </div>
        )
    }
    login () {
        this.loadingToast()
        let _this = this
        let userPhone = this.userPhone.value
        let userCode = this.userCode.value
        this.props.getInitUser({
            userPhone: userPhone,
            userCode: userCode,
            success () {
                _this.successToast()
            },
            fail () {
                _this.failToast()
            }
        })
    }
    render () {
        return (
            <div className='login-box'>
                { this.renderTop() }
                { this.renderLoginMain() }
            </div>
        )
    }
}

export default GroupCommon(Login)
