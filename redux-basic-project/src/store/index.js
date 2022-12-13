import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(prevState) {
            prevState.counter++;
        },
        decrement(prevState) {
            prevState.counter--;
        },
        increase(prevState, action) {
            prevState.counter = prevState.counter + action.payload;
        },
        toggle(prevState) {
            prevState.showCounter = !prevState.showCounter;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
