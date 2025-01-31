// features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';

const cartSlice = createSlice({
  
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);

      
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
