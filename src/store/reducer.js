import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

import { campersReducer } from './campersSlice';

const persistConfig = {
  key: 'campers',
  storage,
}

const persistedCampersReducer = persistReducer(persistConfig, campersReducer);

export const reducer = {
  campers: persistedCampersReducer,
};