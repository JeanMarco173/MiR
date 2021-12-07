import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0, isVisible: true, status: 'completed' }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        reset: (state) =>  {
            state.value = 0;
            state.isVisible = true;
        },
        toggle: (state) =>  {
            state.isVisible = !state.isVisible;
        }
    }
})

export const { increment, decrement, reset, toggle } = counterSlice.actions

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(increment(amount));
    }, 1000);
};

export default counterSlice.reducer