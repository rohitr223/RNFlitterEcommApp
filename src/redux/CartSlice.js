import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const {id, name, price, image} = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({id, name, price, image, quantity: 1});
      }
      state.total += price;
    },
    removeFromCart: (state, action) => {
      const {id, price} = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];

        if (existingItem.quantity === 1) {
          state.items.splice(existingItem, 1);
        } else {
          existingItem.quantity -= 1;
        }
        state.total -= price;
      }
    },
    increaseQuantity: (state, action) => {},
    decreaseQuantity: (state, action) => {},
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
