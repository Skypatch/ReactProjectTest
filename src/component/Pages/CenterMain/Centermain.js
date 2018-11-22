import React, { Component } from 'react'
import './Centermain.scss'
import { NavLink } from 'react-router-dom'
import { GroupCommon } from '../../../modules/group'

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'

//创建组件
class Centermain extends Component {
    constructor (props) {
        super (props)
        this.exit = this.exit.bind(this)
    }
    loadingToast() {
        Toast.loading('Loading...', 1.5, () => {
          
        })
    }
    successToast() {
        Toast.success('成功注销账户！', 1.5);
    }
    failToast() {
        Toast.fail('网络状态不佳，再试一次！', 1.5);
    }
    exit () {
        let _this = this
        this.loadingToast()
        this.props.exit({
            success () {
                _this.successToast()
            },
            fail () {
                _this.failToast()
            }
        })
    }
    renderOrder () {
        let { OrderData } = this.props
        return (
            <div className='myOrder'>
                    <div className='o-top'>
                        <div className='o-t-left'>
                            <i className='fa fa-list-alt'></i>
                            <span>我的订单</span>
                        </div>
                        <div className='all-order'>
                            <NavLink to='/'>
                                <span>查看我的全部订单</span>
                                <i className='fa fa-chevron-right'></i>
                            </NavLink>
                        </div>
                    </div>
                    <div className='o-bottom'>
                        <ul>
                            {OrderData.map(item => 
                                <li key={ item.id }>
                                <NavLink to='/center'>
                                    <i className={ item.icon }></i>
                                    <span>{ item.cont }</span>
                                </NavLink>
                                </li>    
                            )}
                        </ul>
                    </div>
                </div>
        )
    }
    renderAsset () {
        let { assetData } = this.props
        return (
            <div className='myAsset'>
                <div className='a-top'>
                    <div className='a-t-left'>
                        <i className='fa fa-money'></i>
                        <span>我的订单</span>
                    </div>
                </div>
                <div className='a-bottom'>
                    {assetData.map(item => 
                    <NavLink to='/center' key={ item.id }>
                        { item.cont }
                    </NavLink>    
                    )}
                </div>
            </div>
        )
    }
    renderService () {
        let { serviceData } = this.props
        return (
            <div className='serviceList'>
                <ul>
                    {serviceData.map(item => 
                    <li key={ item.id }>
                        <button>
                            <div className='left'>
                                <i className={ item.icon }></i>
                                <span>{ item.cont }</span>
                            </div>
                            <div className='right'>
                                <i className='fa fa-chevron-right'></i>
                            </div>
                        </button>
                    </li>    
                    )}
                </ul>
                <button className='sign-out'
                    onClick={ this.exit }
                    >
                        <div className='left'>
                                <i className='fa fa-sign-out'></i>
                                <span>退出登录</span>
                            </div>
                            <div className='right'>
                                <i className='fa fa-chevron-right'></i>
                            </div>
                </button>
            </div>
        ) 
    }
    render () {
        return (
            <div className='Centermain-box'>
                { this.renderOrder() }
                { this.renderAsset() }
                { this.renderService() }
                <div className='center-footer'>
                    <div className='c-f-box'>
                        <p>客服热线400-123-8888 (8:00-22:00)</p>
                        <p>拨打前请记录您的UID  0</p>
                    </div>
                </div>
            </div>
        )
    }
}


Centermain.defaultProps = {
    OrderData: [
        {
            id: 1,
            cont: '待付款',
            icon: 'fa fa-credit-card-alt'
        },
        {
            id: 2,
            cont: '待付款',
            icon: 'fa fa-credit-card-alt'
        },
        {
            id: 3,
            cont: '待付款',
            icon: 'fa fa-credit-card-alt'
        },
        {
            id: 4,
            cont: '待付款',
            icon: 'fa fa-credit-card-alt'
        }
    ],
    assetData: [
        {
            id: 1,
            cont: '现金券'
        },
        {
            id: 2,
            cont: '红包'
        },
        {
            id: 3,
            cont: '聚美余额'
        },
        {
            id: 4,
            cont: '礼品卡'
        }
    ],
    serviceData: [
        {
            id: 1,
            icon: 'fa fa-headphones',
            cont: '售后服务'
        },
        {
            id: 2,
            icon: 'fa fa-envelope-o',
            cont: '意见反馈'
        },
        {
            id: 3,
            icon: 'fa fa-address-book',
            cont: '收货地址'
        },
        {
            id: 4,
            icon: 'fa fa-phone',
            cont: '400-123-8888'
        }
    ]
}

export default GroupCommon(Centermain)
