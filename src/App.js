  import React, { Component } from 'react'
//引入页面组件
import { Home, Center, Car, Team } from './component/Pages'

import { Route, Switch, withRouter } from 'react-router-dom'

import AppFooter from './component/common/AppFooter/AppFooter'

import { GroupCommon } from './modules/group'

class App extends Component {
  constructor (props) {
    super (props)
    // this.state = {
    //   isRoute: true
    // }
  }
  // componentWillReceiveProps (props) { //这里要接收一个改变后的新值
  //   // console.log(this.props)
  //   let { pathname } = props.location
  //   // console.log(pathname)
  //   if (pathname === '/center' || pathname === '/center/login') {
  //     this.  setState({
  //       isRoute: false
  //     })
  //   } else {
  //     this.setState({
  //       isRoute: true
  //     })
  //   }
  // }
  componentWillMount () {
    this.props.changeInfo()
  }
  renderRoutes () {
    let { routes } = this.props
    return (
      <Switch>
        { 
          routes.map(item => <Route path={ item.path } component={ item.component } exact = { item.exact } key = { item.id }></Route>) 
        }
      </Switch>
    )
  }
  renderFooter () {
    let { pathname } = this.props.location
    if (pathname === '/center' || pathname === '/center/login' || pathname === '/center/user' || pathname === '/center/register' || pathname === '/team/detail/' || pathname === '/team/detail') {
      return ''
    } else {
      return <AppFooter/>
    }
  }
  render() {
    return (
      <div className="App">
        { this.renderRoutes() }
        { this.renderFooter() }
      </div>
    );
  }
}


App.defaultProps = {
  routes: [
    {
      id: 1,
      path: '/',
      component: Home,
      exact: true
    },
    {
      id: 2,
      path: '/team',
      component: Team,
      exact: false
    },
    {
      id: 3,
      path: '/car',
      component: Car,
      exact: false
    },
    {
      id: 4,
      path: '/center',
      component: Center,
      exact: false
    }
  ]
}


export default withRouter(GroupCommon(App));
