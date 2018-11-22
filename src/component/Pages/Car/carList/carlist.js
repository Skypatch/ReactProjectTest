import React, { Component } from 'react'
import './carlist.scss'

import { GroupTeam } from '../../../../modules/group'

import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile'

import PropTypes from 'prop-types'


//创建组件
class CarList extends Component {
    constructor (props) {
        super (props)
        this.showAlert = this.showAlert.bind(this)
        this.add = this.add.bind(this)
        this.reduce = this.reduce.bind(this)
    }
    loadingToast() {
        Toast.loading('Loading...', 1, () => {
          
        })
    }
    successToast() {
        Toast.success('删除商品成功！', 2);
    }
    add(data) {
        let _this = this
        let { id, type } = data
        if (id && type) {
            this.props.addNum({
                id,
                type,
                success () {
                    //在成功的时候，这里必须执行一次这个方法，不然页面无法拿到最新数据
                    _this.props.getCarData() 
                },
                fail () {
    
                }
            })
        }
    }
    reduce (data) {
        let _this = this
        let { id, type } = data
        if (id && type) {
            this.props.reduceNum({
                id,
                type,
                success () {
                    _this.props.getCarData()
                },
                fail () {
    
                }
            })
        }
    }
    showAlert (event) {
        let _this = this
        event = event.nativeEvent
        let del_Id = event.target.title
        let del_Type = event.target.attributes.itemType.value
        // console.log(del_Id, del_Type)
        const alert = Modal.alert;
        const alertInstance = alert('删除商品', '您确定要删除此商品吗？', [
            { text: '取消', onPress: () => {}
            , style: 'default' },
            { text: '确定', onPress: () => {
                this.loadingToast()
                this.props.delectItem({
                    id: del_Id,
                    type: del_Type,
                    success () {                       
                        _this.successToast()
                    },
                    fail () {
                        console.log('失败')
                    }
                })
            }
          }
          ])
          setTimeout(() => {
            // 可以调用close方法以在外部close
            alertInstance.close();
          }, 10000);
    }
    render () {
        let _this = this
        let { rel_data } = this.props
        if (!rel_data) {
            return ''
        }
        if (rel_data) {
            return (
            <div className='carlist-box'>
                <div className='Tips'>
                    <span>商品数量有限，请尽快结算~</span>
                </div>
                <div className='goodsList'>
                    <h3 className='g-title'>聚美优品发货</h3>
                    <ul ref={ el => this.ul = el }>
                        {rel_data.map(item => 
                            <li key={ item.imgSrc }
                            >
                            <img src={ item.imgSrc } alt='' />
                            <div className='itemDetail'>
                                <p>
                                    <b>[极速免税]</b>
                                    <span>{ item.short_name }</span>
                                </p>
                                <div className='control'>
                                    <div className='toLow'
                                    onClick={ () => { this.reduce({
                                        id: item.id,
                                        type: item.itemType
                                    }) } }
                                    >
                                        <i className='fa fa-minus'></i>
                                    </div>
                                    <span className='number'>{ item.num }</span>
                                    <div className='toUp'
                                    onClick={ () => { this.add({
                                        id: item.id,
                                        type: item.itemType
                                    }) } }
                                    >
                                        <i className='fa fa-plus'></i>
                                    </div>                                    
                                </div>
                                <div className='edit'>
                                    <span className='disc'>{ item.disc }</span>
                                    <div className='actions'>
                                        <span
                                        onClick={ this.showAlert }
                                        title={item.id}
                                        itemType={ item.itemType }
                                        >删除</span>
                                    </div>
                                </div>
                            </div>
                        </li>    
                        )}
                    </ul>
                </div>
                <div className='car-list-footer'>
                    <p>这是底部</p>
                </div>
            </div>
        )
        }
        
    }
}

export default GroupTeam(CarList)
