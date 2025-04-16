import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './UserSlice'

let stock = createSlice({
    name : 'stock',
    initialState : [7, 15, 8]
})

let cart = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        countIncrease(state, action) {
            let i = state.findIndex(a => a.id == action.payload)
            state[i].count++
        },
        addItem(state, action) {
            let p = state.find(item => item.id == action.payload.id)
            if(p) {
                p.count++;
            } else {
                state.push(action.payload)
            }
        }
    }
})
export let { countIncrease, addItem } = cart.actions

export default configureStore({
    reducer: {
        // 2. 1번에 만든 createSlice를 등록
        //     내맘대로 : user.reducer
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})