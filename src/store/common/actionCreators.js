import { CHANGE_USER_INFO, REGISTER_USER_INFO } from './const'

const actionCreators  = {
    //这里放很多方法
    changeInfo () {
        return dispatch => {
            setTimeout(() => {
                let mes = localStorage.userInfo
                if (mes) {
                    dispatch ({
                        type: CHANGE_USER_INFO,
                        userInfo: JSON.parse(mes)
                    })
                    // console.log(JSON.parse(mes))
                }
            }, 0)
        }
    },
    getInitUser ({userPhone, userCode, success, fail}) {
        //获取本地存储信息
        //然后将这个 再给reducer    
        return dispatch => {
            setTimeout(() => {
                let mes = JSON.parse(localStorage.registerInfo)
                // console.log(mes.phoneNum)
                if (userPhone === mes.phoneNum && userCode === mes.password) {
                    let userInfo = localStorage.registerInfo ? mes : null
                    localStorage.userInfo = JSON.stringify(userInfo)
                    dispatch ({
                        type: CHANGE_USER_INFO,
                        userInfo: userInfo
                    })
                    if (success) success()
                    return false
                }
                if (fail) fail()
            }, 1500)
        }
    },
    exit ({success, fail}) {
        return dispatch => {
            setTimeout(() => {
                if (success) {
                    success()
                    localStorage.removeItem('userInfo')
                    dispatch({
                        type: CHANGE_USER_INFO,
                        userInfo: null
                    })
                    return false
                }
                if (fail) {
                    fail()
                }
            }, 1500)
        }
    },
    getRegister ({phoneNum, password, identifyCode, success, fail}) {
        return dispatch => {
            //后台的逻辑 通过id来帮助我们取得两个数据
            setTimeout(() => { //模拟后台拿数据延迟
                let registerInfo = {
                    phoneNum: phoneNum,
                    password: password,
                    identifyCode: identifyCode
                }
                dispatch ({
                    type: REGISTER_USER_INFO,
                    registerInfo: registerInfo
                })
                if (success) {
                    success()
                    //成功之后保存到localStorage里
                    localStorage.registerInfo = JSON.stringify(registerInfo)
                    return false
                } else if (fail) {
                    fail()
                }
            }, 0)      
        }
    }
}


export default actionCreators