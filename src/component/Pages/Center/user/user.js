import React, { Component } from 'react'
import './user.scss'
import { GroupCommon } from '../../../../modules/group'
import CenterMain from '../../CenterMain/Centermain'

//创建组件
class User extends Component {
    constructor (props) {
        super (props)
        this.backHome = this.backHome.bind(this)
        this.backPrev = this.backPrev.bind(this)
    }
    exit () {
        this.props.exit()
    }
    componentWillReceiveProps (props) {
        // console.log(props.history)
    }
    backHome () {
        let { replace } = this.props.history
        replace('/')
    }
    backPrev () {    
        let { replace } = this.props.history
        replace('/car')
    }
    render () {
        let { userInfo } = this.props
        return (
            <div className='user-box'>
                <div className='center-container'>
                    <div className='top'>
                        <button
                        className='back'
                        onClick={ this.backPrev }
                        >
                            <i className='fa fa-chevron-left'></i>
                        </button>
                        <span className='top-cont'>我的聚美</span>
                        <button
                        className='home'
                        onClick={ this.backHome }
                        >
                            <i className='fa fa-home'></i>
                        </button>    
                    </div>
                    <div className='portraint'>
                        <i className='userPic fa fa-user-circle'></i>
                    </div>
                    <div className='user-h'>            
                        <div className='operation'>
                            <span>{ !userInfo ? '请登录' : userInfo.phoneNum }</span>
                        </div>
                    </div>
                </div>
                <CenterMain></CenterMain>
            </div>
        )
    }
}

export default GroupCommon(User)
