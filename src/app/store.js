import { configureStore } from '@reduxjs/toolkit'

import destinationsReducer from '../features/destinations/destinationsSlice';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        destinations: destinationsReducer,
        counter: counterReducer,
    }
  })