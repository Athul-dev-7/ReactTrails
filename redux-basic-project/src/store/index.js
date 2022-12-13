import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-store/counter';
import authReducer from './auth-store/auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
