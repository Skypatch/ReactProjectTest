import axios from 'axios'
import qs from 'querystring'

//跨域处理
//是否允许跨域
axios.defaults.crossDomain = true
 //这条意思是默认形式可以进行跨域，并且可以对cookie做一些请求
axios.defaults.withCredentials = true

const config = {
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
}

const Post = ({url, data, config}) => {
    return axios.post(url, qs.stringify(data), config)
}


export default Post
