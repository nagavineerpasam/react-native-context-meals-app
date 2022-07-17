import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
    name: 'Fav',
    initialState: [],
    reducers: {
        addToFav: (state, action) => {
            state.push(action.payload);
        },
        removeFav: (state, action) => state.filter((id) => action.payload !== id),
    },
});

export const { addToFav, removeFav } = favSlice.actions;
export default favSlice.reducer;
