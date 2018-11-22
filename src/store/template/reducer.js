import state from './state'

const reducer = ( previousState = state, action ) => {
    //这里设置新状态
    let new_state = { ...previousState }
    //action是actionCreators发过来的action
    switch (action.type) {
        default: break ;
    }


    return new_state
}