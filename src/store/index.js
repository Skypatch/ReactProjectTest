import { createStore, applyMiddleware } from 'redux'
//为了解决某些事件点击出现效果需要等待之后才能渲染视图，引入thunk
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore( 
    reducer,
    applyMiddleware(thunk)
)

export default store