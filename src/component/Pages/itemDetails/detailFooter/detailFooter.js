import React, { Component } from 'react'
import './detailFooter.scss'
import { GroupTeam } from '../../../../modules/group'
import { Link } from 'react-router-dom'

import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile'

//创建组件
class Detailfooter extends Component {
    constructor (props) {
        super (props)
        this.sendMesToCar = this.sendMesToCar.bind(this)
        // this.loadingToast = this.loadingToast.bind(this)
    }
    loadingToast() {
        Toast.loading('Loading...', 2, () => {
          
        })
    }
    successToast() {
        Toast.success('添加购物车成功！', 2);
    }
    sendMesToCar () {
        this.loadingToast()
        let { confirmItem } = this.props
        let { urlData } = this.props
        let ItemType = urlData.type
        let _this = this
        if (confirmItem) {   
            this.props.sendMes({
                confirmItem,
                ItemType,
                success () {         
                    _this.successToast()
                    _this.props.getCarData()
                },
                fail () {
                    
                }
            })
        }
       
    }
    renderDetailFooter () {
        let { confirmItem } = this.props
        if (!confirmItem) {
            return ''
        }
        if (confirmItem) {
            return (
                <div className='d-footer'>
                    <Link className='back'
                    to='/team'
                    >
                        返回
                    </Link>
                    <div className='single-price'>
                        <p>{ confirmItem.single_price }</p>
                    </div>
                    <button className='buyNow'>
                        <p>{ confirmItem.disc }</p>
                        <span
                        onClick = { this.sendMesToCar }
                        >加入购物车</span>
                    </button>
                </div>
            )
        }
    }
    render () {
        return (
            <div className='detailFooter-box'>
                { this.renderDetailFooter() }
            </div>
        )
    }
}

export default GroupTeam(Detailfooter)
