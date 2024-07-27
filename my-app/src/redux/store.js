import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './usersSlice';

const store = configureStore({
    reducer: {
        allUser: usersSlice,
    },
});

export default store;