import React from 'react';
import ReactDOM from 'react-dom';
//引入全局rem
import './modules/rem'

//引入lodash插件（主要用于处理值、数组 等等 值的运算方面）
import 'lodash'

//引入iconfont图标
import '../src/assets/iconfont/css/font-awesome.min.css'

//引入全局基础sass
import './stylesheets/main.scss'

//引入全局的axios
import './modules/axios-util/index'


//引入swiper样式
import 'swiper/dist/css/swiper.min.css'

// 引入蚂蚁金服mobile框架
import 'antd-mobile/dist/antd-mobile.css'
import DatePicker from 'antd-mobile/lib/date-picker' // 加载 JS
import 'antd-mobile/lib/date-picker/style/css'


//路由测试 (路由共有两种 HashRouter 和 BrowserRouter)
// import { HashRouter as Router } from 'react-router-dom'
//Link身上也有to属性 类似 link-router 会转成 a标签 
import { BrowserRouter as Router } from 'react-router-dom'
//引入页面组件
// import { Home, Center, Car, Team } from './component/Pages'

//我们react中没有路由表，它提供了我们一个路由工具 Route 
//Switch帮助我们可以在Router中书写多个路由 但是我们要加上exact
//NavLink 类似active-class 点击后会给标签添加一个类名active(相当于当前样式)
// import { Route, Switch, NavLink } from 'react-router-dom'

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'react-redux' 

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
