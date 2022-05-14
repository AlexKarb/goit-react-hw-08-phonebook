import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from 'redux/filter/filterSlice';
import { contactQuery } from 'redux/contacts/contactsQuery';
import { authPersistReducer } from 'redux/auth/authPersistConfig';
// import { persistMiddleware } from 'redux/store/persistStore';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    filter: filterSlice.reducer,
    [contactQuery.reducerPath]: contactQuery.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactQuery.middleware),
});

// middleware: getDefaultMiddleware =>
//   getDefaultMiddleware(persistMiddleware).concat(contactQuery.middleware)
