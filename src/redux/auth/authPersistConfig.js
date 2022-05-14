import { persistReducer } from 'redux-persist';
import { authSlice } from 'redux/auth/authSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
