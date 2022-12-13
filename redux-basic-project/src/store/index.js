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

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(prevState) {
            prevState.isAuthenticated = true;
        },
        logout(prevState) {
            prevState.isAuthenticated = false;
        },
    },
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
