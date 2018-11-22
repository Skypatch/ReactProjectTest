//要像vue一样，将两个方法挂载在实例上

import { Component } from 'react'

//这里导入get和post两个方法
import Get from './get'
import Post from './post'

Component.prototype.$get = Get
Component.prototype.$post = Post


export default {
    Get, Post
}
