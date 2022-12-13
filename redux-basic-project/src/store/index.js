import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: prevState.counter + 1,
                showCounter: prevState.showCounter,
            };

        case 'decrement':
            return {
                counter: prevState.counter - 1,
                showCounter: prevState.showCounter,
            };
        case 'increase':
            return {
                counter: prevState.counter + action.amount,
                showCounter: prevState.showCounter,
            };
        case 'toggle':
            return {
                counter: prevState.counter,
                showCounter: !prevState.showCounter,
            };

        default:
            return prevState;
    }
};

const store = createStore(counterReducer);

export default store;
