import React, { Component } from 'react'
import './homeTabLeft.scss'
import { NavLink } from 'react-router-dom'
import topPic from '../../../assets/homTabImgs/topPic.jpg'
import item1 from '../../../assets/homTabImgs/item1.jpg'
import item2 from '../../../assets/homTabImgs/item2.jpg'
import item3 from '../../../assets/homTabImgs/item3.jpg'
import item4 from '../../../assets/homTabImgs/item4.jpg'

import { GroupHome } from '../../../modules/group'

//创建组件
class HomeTabLeft extends Component {
    constructor (props) {
        super (props)
    }
    componentWillMount () {
        // this.props.getHomeListData()  //(无法跨域)
    }
    renderTopPic () {
        let { TabTopPic } = this.props
        return (
            <div className='topImg'>
                { TabTopPic.map(item => 
                    <NavLink to={ item.path } key={ item.id }>
                    <img src={ item.src } alt={ item.alt } />
                    </NavLink>    
                )}
            </div>
        )
    }
    renderItemList () {
        let { TabItems } = this.props
        return (
            <ul className='itemList'>
                { TabItems.map(item => 
                    <li key={ item.id }>
                        <NavLink to={ item.path }>
                            <div className='itemPic'>
                                <img src={ item.src } alt={ item.alt } />
                            </div>
                            <div className='cont'>
                                <p className='title'>
                                    { item.itemName }
                                </p>
                                <div className='price'>
                                    <span className='disc'>
                                    ¥{ item.discounted }
                                    </span>
                                    <del className='nodisc'>
                                    ¥{ item.nodiscount }
                                    </del>
                                    <span className='comment'>
                                    { item.comment }条评论
                                    </span> 
                                </div>     
                            </div>
                        </NavLink>
                    </li>    
                )}
            </ul>
        )
    }
    render () {
        return (
            <div className='homeTab-box'>
                { this.renderTopPic() }
                { this.renderItemList() }
            </div>
        )
    }
}

HomeTabLeft.defaultProps = {
    TabTopPic: [
        {
            id: 1,
            src: topPic,
            alt: '日本花王品牌',
            path: '/'
        }
    ],
    TabItems: [
        {
            id: 1,
            src: item1,
            itemName: 'AHC神仙水水乳2件套水100ml+乳100ml+水30ml+乳30ml',
            path: '/',
            discounted: '149',
            nodiscount: '376',
            comment: '2.0万',
            alt: '神仙水乳'
        },
        {
            id: 2,
            src: item2,
            itemName: '【人气妖怪再升级】AGE20S 2018新款气垫14g*2ea',
            path: '/',
            discounted: '178',
            nodiscount: '240',
            comment: '2004',
            alt: '人气妖怪AGE20s'
        },
        {
            id: 3,
            src: item3,
            itemName: '韩国•su:m37（呼吸）时光能量水乳面霜三件套套盒',
            path: '/',
            discounted: '535',
            nodiscount: '647',
            comment: '5019',
            alt: '时光能量水乳'
        },
        {
            id: 4,
            src: item4,
            itemName: '【满199减100不封顶】御泥坊补水透亮保湿面膜套装42片,持续水嫩鲜活~',
            path: '/',
            discounted: '199.9',
            nodiscount: '339',
            comment: '1051',
            alt: '御泥坊补水保湿面膜'
        }
    ]
}

export default GroupHome(HomeTabLeft)
