import { createStore } from 'redux';

const initialState = { counter: 0, isVisible: true }

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + action.value,
            isVisible: state.isVisible,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - action.value,
            isVisible: state.isVisible,
        };
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            isVisible: !state.isVisible,
        };
    }
    if (action.type === 'reset') {
        return {
            counter: 0,
            isVisible: true,
        };
    }
    return state;
};

const store = createStore(counterReducer);

export default store;