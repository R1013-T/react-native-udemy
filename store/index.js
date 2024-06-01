import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: "root",
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)