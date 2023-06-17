import dummyReducer from './dummySlice';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer:{
    dummy: dummyReducer,
  },
});

export default store;
