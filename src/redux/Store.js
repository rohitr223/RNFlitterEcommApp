import {configureStore} from '@reduxjs/toolkit';
import cartreducer from './CartSlice';

const Store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});

export default Store;
