import axios from 'axios'

//跨域处理
//是否允许跨域
axios.defaults.crossDomain = true
 //这条意思是默认形式可以进行跨域，并且可以对cookie做一些请求
axios.defaults.withCredentials = true

const Get = ( {url, data} ) => {
    return axios.get(url, {
        params: {
            data
        }
    })
}

export default Get
