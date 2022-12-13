import { createSlice } from '@reduxjs/toolkit';
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

export const authActions = authSlice.actions;

export default authSlice.reducer;
