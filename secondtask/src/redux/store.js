import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice.js';

const store = configureStore({
    reducer: {
        task: taskSlice,
    },
});

export default store;
  