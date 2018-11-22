import React, { Component } from 'react'
import './detail.scss'
import { GroupTeam } from '../../../modules/group'
import queryString from 'query-string' 
import { Link, withRouter } from 'react-router-dom'
import Detailfooter from './detailFooter/detailFooter'
import Swiper from 'swiper/dist/js/swiper.js'

//创建组件
class Details extends Component {
    constructor (props) {
        super (props)
    }
    componentDidMount () {
        new Swiper(this.item, {
            freeMode : true,
            slidesPerView : 1,
            spaceBetween : 20,
            setWrapperSize : true,
        })
        let url = this.props.location.search
        let parsed = queryString.parse(url) //拿到url拼接在后面的数据
        this.props.getUrl(parsed) //向actionCreator发送动作操作
        setTimeout(() => {
            let { urlData } = this.props
            let { teamData } = this.props
            if (!urlData || !teamData) {
                return ''
            }
            if (urlData && teamData) {
                // console.log(teamData.Content.Home[0].imgSrc)
                // console.log(urlData.itemId)
                this.props.getFinalItem(teamData.Content[urlData.type][urlData.itemId - 1])
            } 
        }, 0)
    }
    getActionUrl () {
        let { confirmItem } = this.props
        if (!confirmItem) {
            return ''
        }
        if (confirmItem) {
            return (
                <div className='detail-area'>
                    <div className="swiper-container imgBox"
                    ref={ el => this.item = el }
                    >
                        <div className="swiper-wrapper">
                            <div className='swiper-slide goodsImg'>
                                <img src={ confirmItem.imgSrc } alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='goods-mes'>
                        <div className='g-m-top'>
                            <p className='disc-price'>
                                <b>{ confirmItem.disc }</b>
                                <strong>包邮</strong>
                            </p>
                            <span className='single-price'>
                                { confirmItem.single_price }
                            </span>
                        </div>
                        <div className='g-m-c'>
                            <span>{ confirmItem.nodisc }</span>
                        </div>
                    </div>
                    <div className='goods-demo'>
                        <p>{ confirmItem.group_name_tag }</p>
                        <span>{ confirmItem.short_name }</span>
                    </div>
                    <div className='detail-footer'>
                        赶紧购买吧~亲~
                    </div>
                </div>
            )
        }
        
    }
    render () {
        return (
            <div className='detail-box'>
                { this.getActionUrl() }
                <Detailfooter></Detailfooter>
            </div>
        )
    }
}

export default withRouter(GroupTeam(Details))
