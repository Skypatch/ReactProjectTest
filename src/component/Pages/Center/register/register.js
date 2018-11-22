import React, { Component } from 'react'
import './register.scss'
import { GroupCommon } from '../../../../modules/group'

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'

//创建组件
class Register extends Component {
    constructor (props) {
        super (props)
        // this.login = this.login.bind( this )
        this.toLogin = this.toLogin.bind(this)
        this.backPrev = this.backPrev.bind(this)
        this.saveMes = this.saveMes.bind(this)
    }
    loadingToast() {
        Toast.loading('Loading...', .5, () => {
          
        })
    }
    successToast() {
        Toast.success('注册成功！', 1);
    }
    backPrev () {
        let { goBack } = this.props.history
        goBack()
    }
    toLogin () {
        let { replace } = this.props.history
        replace('/center/login')
    }
    saveMes () {
        this.loadingToast()
        let _this = this ;
        let phoneNum = this.phoneNum.value
        let identifyCode = this.identifyCode.value
        let password = this.password.value
        let { replace } = this.props.history
        this.props.getRegister({
            phoneNum,
            identifyCode,
            password,
            success () { 
                setTimeout(() => {
                    _this.successToast()
                }, 500)
                setTimeout(() => {
                    replace('/center/login')
                }, 1500)
            },
            fail () {
                console.log('注册信息有误，请重新检查')
            }
        })
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
                <span className='top-cont'>注册</span>
                <button
                className='login'
                onClick={ this.toLogin }
                >
                    <span>登录</span>
                </button>    
            </div>
        )
    }
    renderLoginMain () {
        return (
            <div className='register-container'>
                <div className='phone-register'>
                    <span>手机注册</span>
                </div>
                <div className='phoneNum'>
                    <input type='text' placeholder='请输入11位手机号'
                    ref={el => this.phoneNum = el}
                    />
                </div>
                <div className='code'>
                    <input type='text' placeholder='请输入验证码'
                    ref={el => this.identifyCode = el}
                    />
                </div>
                <div className='password'>
                    <input type='password' placeholder='请输入6~16位登录密码'
                    ref={el => this.password = el}
                    />
                </div>
                <button className='register'
                onClick={ this.saveMes }
                >
                    注册
                </button>
            </div>
        )
    }
    render () {
        return (
            <div className='register-box'>
                { this.renderTop() }
                { this.renderLoginMain() }
            </div>
        )
    }
}

export default GroupCommon(Register)
