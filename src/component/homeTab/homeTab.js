import React, { Component } from 'react'
import './homeTab.scss'

import Hometableft from './TabLeft/homeTabLeft'
import Hometabright from './TabRight/homeTabRight'

import { Route } from 'react-router-dom'
import { GroupHome } from '../../modules/group'
import { NavLink } from 'react-router-dom'


import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: '今日10点上新' },
  { title: '明日10点预告' }
];

let borderColor = {
    borderColor: '#ec1e85'
}

let textStyle = {
    font: '.16rem/.16rem "" '
}

const TabExample = () => (
  <div>
    <WhiteSpace />
    <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={false}
    tabBarActiveTextColor='#ec1e85' tabBarUnderlineStyle={ borderColor }
    tabBarTextStyle={ textStyle }
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
       <Hometableft></Hometableft>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '', backgroundColor: '#fff' }}>
        <Hometabright></Hometabright>
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

export default GroupHome(TabExample)
