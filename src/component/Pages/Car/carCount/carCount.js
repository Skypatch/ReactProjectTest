import React, { Component } from 'react'
import './carCount.scss'

import { GroupTeam } from '../../../../modules/group'

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'

import _ from 'lodash'

//创建组件
class CarCount extends Component {
    constructor (props) {
        super (props)
        this.state = {
            sum: 0 ,
            itemNum: 0
        }
    }
    componentDidMount () { 
        //因为组件销毁了之后setState方法被重写成不对任何状态做改变了
        //这里我们需要通过异步手段，等数据处理完毕之后再重新重写setState方法以达到初始化
        setTimeout(() => {
            let { priceSum } = this.props
            this.setState({
                sum: priceSum.cashSum ,
                itemNum: priceSum.itemNum
            })
        }, 500)
    }
    componentWillUnmount () {
        //如果不做此生命函数的处理，则会报错
        //原因是 不能在已经被销毁的组件中调用setState() (当商品被删除后依旧存在异步操作的setState方法)
        //为此 组件被销毁之前需要重写setState方法 不对状态做任何改变
        //目的是为了在组件卸载之前 控制异步不进行setState
        this.setState = (state, callback) => {
            return;
        }
    }
    componentWillUpdate (nextProps, nextState) {
        if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
            let _this = this
            setTimeout(() => {
                let { rel_data } = this.props
                if (rel_data) {
                    this.props.countGoods({ //往actionCreator发数据
                        rel_data,
                        success () {
                            _this.props.getCarData()
                            setTimeout(() => {
                                let { priceSum } = _this.props
                                if (priceSum) {
                                    _this.setState({
                                        sum: priceSum.cashSum ,
                                        itemNum: priceSum.itemNum
                                    })
                                }
                            }, 200)
                        },
                        fail () {

                        }
                    })
                }
            }, 0)
        } 
    }
    renderCount () {
        return (
            <div className='view'>
                <p className='count'>
                    <span className='c-cont'>合计:</span>
                    <strong className='countNum'>¥{ (this.state.sum).toFixed(1) }</strong>
                </p>
                <button className='pay'>
                    去结算({ this.state.itemNum })
                </button>
            </div>
        )
    }
    render () {
        return (
            <div className='carCount-box'>
                   { this.renderCount() }
            </div>
        )
    }
}

export default GroupTeam(CarCount)
