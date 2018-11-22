import React, { Component } from 'react'
import './search.scss'


//创建组件
class Search extends Component {
    constructor (props) {
        super (props)
    }
    render () {
        return (
            <div className='search-container'>
                <div className='sch'>
                    <input type='search' placeholder='搜索' />
                </div>
                <i className='fa fa-list'></i>
            </div>
        )
    }
}

export default Search
