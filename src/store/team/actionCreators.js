import axios from 'axios'
import { TEAM_DATA, TEAM_CONTENT_DATA, TEAM_REQ_DATA, TEAM_URL, FINAL_DATA, CAR_DATA, CAR_DELECT, REL_CAR_DATA, REPLAYING_PAGE, CONTROL_ITEM_NUM, COUNT_ITEM_SUM } from './const'

const actionCreators  = {
    //这里放很多方法
    getTeamContentData () { //请求本地json数据
        return dispatch => {
            setTimeout(() => {
                axios.get('/teamData/teamData.json').then( res => {
                    dispatch({
                        type: TEAM_DATA,
                        teamData: res.data
                    })
                })
            }, 0)
        }
    },
    getId (id) {
        let DataType = ''
        return dispatch => {
            setTimeout(() => {
                switch(id){
                    case 0: 
                        DataType = 'Home'
                        break ;
                    case 1: 
                        DataType = 'Health'
                        break ;
                    case 2: 
                        DataType = 'Shoe'
                        break ;
                    case 3: 
                        DataType = 'House'
                        break ;
                    case 4: 
                        DataType = 'Beauty'
                        break ;
                    case 5: 
                        DataType = 'Decoration'
                        break ;
                    case 6: 
                        DataType = 'Gift'
                        break ;
                    case 7: 
                        DataType = 'Food'
                        break ;
                    case 8: 
                        DataType = 'Elec'
                        break ;
                    case 9: 
                        DataType = 'Next'
                        break ;
                    default: break ;
                }
                dispatch({
                    type: TEAM_CONTENT_DATA,
                    contentData: {
                        id: id,
                        DataType: DataType
                    }
                })
            }, 0)
        }
    },
    getData () {
        return dispatch => {
            // http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20
            // http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=2&per_page=20
            //page会随着请求的数据每次页数加1 ???
            //tab=coutuan_home  这里的home也是一个变量，每个分类请求的数据都不同
            setTimeout(() => {
                axios.get('/jm/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20').then( res => {
                    dispatch({
                        type: TEAM_REQ_DATA,
                        teamReqData: res.data.data
                    })
                })
            }, 0)
        }
    },
    getUrl (url) {
        return dispatch => {
            setTimeout(() => {
                dispatch({
                    type: TEAM_URL,
                    urlData: url
                })
            }, 0)
        }
    },
    getFinalItem (confirmItem) {
        return dispatch => {
            setTimeout(() => {
                dispatch({
                    type: FINAL_DATA,
                    confirmItem
                })
            })
        }
    },
    sendMes ({confirmItem, ItemType, success, fail}) {
        return dispatch => {
            setTimeout(() => {
                // console.log(confirmItem)
                dispatch({
                    type: CAR_DATA ,
                    carData: confirmItem
                })
                if (success) {
                    success()
                    if (localStorage.carData) {
                        var array = JSON.parse(localStorage.carData)
                    } else {
                        array = []
                    }
                    for (var i = 0; i<array.length;i++) {
                        if (confirmItem.id === array[i].id && confirmItem.itemType === array[i].itemType) {
                            console.log('这条商品已经存在，增加数量')
                            array[i].num ++
                            //增加完要塞回去，不然永远都是1
                            localStorage.carData = JSON.stringify(array)
                            return false
                        }
                    }
                    array.push(confirmItem)
                    array[i].num = 1
                    // console.log(array)
                    localStorage.carData = JSON.stringify(array)
                } else {
                    fail()
                }
            }, 2000)
        }
    },
    delectItem ({id, type , success, fail}) {
        return dispatch => {
            setTimeout(() => {
                dispatch({
                    type: CAR_DELECT,
                    delect: {
                        id: id,
                        type: type
                    }
                })
                if (success) {
                    success()
                    let cardata = getCars()
                    cardata = cardata.filter((item) => {
                        if (id == item.id) {
                            if (type == item.itemType) {
                                return false
                            }
                        }
                        return true
                    })
                    localStorage.carData = JSON.stringify(cardata)
                } else {
                    fail()
                }
                
            }, 1000)
        }
    },
    addNum ({id, type, success, fail}) {
        return dispatch => {
            setTimeout(() => {
                if (success) {
                    success()
                    let data = getCars()
                    data = data.filter((item) => {
                        if (id === item.id) {
                            if (type === item.itemType) {
                                item.num ++
                                return true
                            }
                        }
                        return true
                    })
                    localStorage.carData = JSON.stringify(data)
                } else {
                    fail()
                }
                
                dispatch({
                    type: CONTROL_ITEM_NUM,
                    controlNum: {
                        id: id,
                        type: type
                    }
                })
            }, 100)
        }
    },
    reduceNum ({id, type, success, fail}) {
        return dispatch => {
            setTimeout(() => {
                if (success) {
                    success()
                    let data = getCars()
                    data = data.filter((item) => {
                        if (id === item.id) {
                            if (type === item.itemType) {
                                item.num --
                                if (item.num <= 0) {
                                    item.num = 1
                                }
                                return true
                            }
                            return true
                        }
                        return true
                    })
                    localStorage.carData = JSON.stringify(data)
                } else {
                    fail()
                }

                dispatch({
                    type: CONTROL_ITEM_NUM,
                    controlNum: {
                        id: id,
                        type: type
                    }
                })
            }, 100)
        }
    },
    getCarData () {
        return dispatch => {
            setTimeout(() => {
                let getCarData = localStorage.carData
                if (getCarData) {
                    dispatch({
                        type: REL_CAR_DATA,
                        rel_data: JSON.parse(getCarData)
                    })
                }
            }, 0)
        }
    },
    reInitCarList () {
        return dispatch => {
            setTimeout(() => {
                let clear = localStorage.carData ; 
                if (clear === '[]') {
                    localStorage.removeItem('carData')
                    dispatch({
                        type: REPLAYING_PAGE,
                        replaying: 1
                    })
                } else {
                    return ''
                }
            }, 0)
        }
    },
    countGoods ({rel_data, success, fail}) {
        return dispatch => {
            setTimeout(() => {
                if (rel_data) {
                    let itemSum = {
                        num: 0,
                        cashSum: 0,
                        itemNum: rel_data.length
                    }
                    if (success) {
                        success()
                        let count = getCars()
                        count = count.filter((item) => {
                            let stringPrice = item.disc
                            let numberPrice = stringPrice.slice(1)
                            itemSum.num += item.num
                            itemSum.cashSum += item.num * numberPrice
                            return true
                        })
                        dispatch({
                            type: COUNT_ITEM_SUM,
                            priceSum: itemSum
                        })
                    } else {
                        fail()
                    }
                }
            }, 0)
        }
    }
}

function getCars () {
    return JSON.parse(localStorage.carData ? localStorage.carData : '[]')
}


export default actionCreators