import { createStore } from 'redux';

const counterReducer = (prevState = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: prevState.counter + 1,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: prevState.counter - 1,
        };
    }
    return prevState;
};

const store = createStore(counterReducer);

export default store;
