import { configureStore } from '@reduxjs/toolkit';
import favReducer from './favReducer';

const store = configureStore({
    reducer: {
        favReducer,
    },
});

export default store;
