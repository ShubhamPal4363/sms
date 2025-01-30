import { configureStore } from '@reduxjs/toolkit';
import idSlice from './Slice/idSlice';
import messageSlice from './Slice/messageSlice';

const Store = configureStore({
  reducer: {
    idValue: idSlice,
    idMessage: messageSlice,
  },
})

export default Store;
