import React, { Component } from 'react'
import './team-nav.scss'
import { NavLink } from 'react-router-dom'
import { GroupTeam } from '../../../../modules/group'
import { Link } from 'react-router-dom'

import Teamfooter from './team-footer/Team-footer'

//创建组件
class TeamNav extends Component {
    constructor (props) {
        super (props)
        this.getTitleItemCssClass = this.getTitleItemCssClass.bind(this)
        this.getContentItemCssClass = this.getContentItemCssClass.bind(this)
        this.renderNav = this.renderNav.bind(this)
        this.sendId = this.sendId.bind(this)
    }
    sendId (id) {
        this.props.getId(id)
    }
    getTitleItemCssClass (index) {
        let { contentData } = this.props
        return index === contentData.id ? "active-click" : ""
    }
    getContentItemCssClass (index) {
        let { contentData } = this.props
        return index === contentData.id ? "team-content active" : "team-content"
    }
    renderNav () {
        let { navData } = this.props
        return (
            <div className='touchNav'>
                <ul>
                    {navData.map((item, index) => {
                        return (
                            <li id='normalStatu'
                            onClick={() => {
                                this.sendId(index)
                            }}
                            className={ this.getTitleItemCssClass(index) }
                            key={ item.id }
                            >
                                <button>{ item.title }</button>
                                <span></span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    renderContent () {      
        let { contentData } = this.props
        let { teamData } = this.props 
        if (!teamData) {
            return ''
        }
        if (teamData) {     
            return (
                <div className='content-box'>
                    {teamData.Nav.map((item, index) => 
                            <div className={ this.getContentItemCssClass(index) }
                            key={ item.id }
                            >
                                <div>
                                    {teamData.Content[contentData.DataType].map(item => 
                                        <Link
                                        to= {`/team/detail/?itemId=${item.id}&type=${contentData.DataType}`}
                                        key={ item.id }
                                        >
                                            <div className='img'>
                                            <img src={ item.imgSrc } alt='' />
                                            </div>
                                            <div className='demo'>
                                            <span className='peopleCount'>
                                            { item.group_name_tag }
                                            </span>
                                            <p className='itemDemo'>
                                            { item.short_name }
                                            </p>
                                            </div>
                                            <div className='control'>
                                            <div className='left'>
                                                <span className='disc'>{ item.disc }</span>
                                                <span className='nodisc'>{ item.nodisc }</span>
                                                <span className='single'>
                                                    { item.single_price }
                                                </span>
                                            </div>
                                        
                                                <button className='right'>
                                                    立即拼团
                                                </button>
                                            
                                            </div>
                                        </Link>    
                                    )}
                                </div>
                            </div>
                        )}
                    <div className='Team-Footer'>
                    <Teamfooter></Teamfooter>
                    </div>
                </div>
                )
            }   
    }
    render () {
        return (
            <div className='teamNav-box'>
                { this.renderNav() }
                { this.renderContent() }
            </div>
        )
    }
}

TeamNav.defaultProps = {
    navData: [
        {
            id: 1,
            title: '推荐'
        },
        {
            id: 2,
            title: '母婴健康'
        },
        {
            id: 3,
            title: '鞋类'
        },
        {
            id: 4,
            title: '家居'
        },
        {
            id: 5,
            title: '美妆'
        },
        {
            id: 6,
            title: '饰品配饰'
        },
        {
            id: 7,
            title: '礼品箱包'
        },
        {
            id: 8,
            title: '食品保健'
        },
        {
            id: 9,
            title: '数码家电'
        },
        {
            id: 10,
            title: '下期预告'
        }
    ]
}



export default GroupTeam(TeamNav)
