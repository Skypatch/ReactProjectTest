import React, { Component } from 'react'
import './car.scss'

//高阶组件 Higher Order Component 函数
//为了解决我们项目中各个组件中出现相似的函数，那我们可以将这些函数都放在高阶组件身上，这样当我们使用的时候，直接使用this.props就可以找到我们的函数了

/* const Hoc = ( Comp ) => { //高阶组件
    return class withClick extends Component {
        handler () {
            alert(1)
        }
        render () {
            return <Comp handler = { this.handler }  />
        }
    }
}

class A extends Component {
    render () {
        let { handler } = this.props
        return (
            <div>
                <button onClick = { handler } >单击</button>
            </div>
        )
    }
}

class B extends Component {
    render () {
        let { handler } = this.props
        return (
            <div>
                <button onDoubleClick = { handler } >双击</button>
            </div>
        )
    }
}

const HA = Hoc ( A )
const HB = Hoc ( B ) */

import { GroupTeam } from '../../../modules/group'

import Carlist from './carList/carlist'
import CarCount from './carCount/carCount'

import _ from 'lodash'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'

//创建组件
class Car extends Component {
    constructor (props) {
        super (props)
        this.backHome = this.backHome.bind(this)
        this.backPrev = this.backPrev.bind(this)
    }
    loadingToast() {
        Toast.loading('Loading...', 1, () => {
          
        })
    }
    componentWillMount () {
        this.loadingToast()
        this.props.getTeamContentData()
        let clear = localStorage.carData ; 
        if (clear === '[]') {
            localStorage.removeItem('carData')
        }
    }
    componentWillUpdate (nextProps, nextState) {
        if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
            this.props.getCarData()
            this.props.reInitCarList()
            return true
        } else {
            return false
        }
    }
    backPrev () {
        let { goBack } = this.props.history
        goBack()
    }
    backHome () {
        let { replace } = this.props.history
        replace('/')
    }
    renderCarHead () {
        return (
            <div className='top'>
                <button
                className='back'
                onClick={ this.backPrev }
                >
                    <i className='fa fa-chevron-left'></i>
                </button>
                <span className='top-cont'>购物车</span>
                <button
                className='home'
                onClick={ this.backHome }
                >
                    <i className='fa fa-home'></i>
                </button>    
            </div>
        )
    }
    renderNoGoods () {
        let carData = localStorage.carData
        if (!carData) {
            return (
                <div className='cart-no-goods'>
                    <p>您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
                </div>
            )
        }
        if (carData) {
            return (
                <div className='carList'>
                    <Carlist></Carlist>
                    <CarCount></CarCount>
                </div>
            )
        }
    }
    render () {
        return (
            <div className='car-box'>
                { this.renderCarHead() }
                { this.renderNoGoods() }
                {/* <HA></HA>
                <HB></HB>  */}    
            </div>
        )
    }
}

export default GroupTeam(Car)
