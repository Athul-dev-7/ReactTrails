import { redux } from 'redux';

const counterReducer = (prevState, action) => {
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

const store = redux.createStore(counterReducer);

export default store;
