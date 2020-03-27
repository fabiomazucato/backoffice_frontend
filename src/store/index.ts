import { Reducer, createStore, Store } from 'redux'
import { IApplicationState } from './types'
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './ducks'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'token']
}

const persistedReducer: Reducer = persistReducer(persistConfig, rootReducer)
export const store: Store<IApplicationState> = createStore(persistedReducer)
export const persistor: Persistor = persistStore(store)
