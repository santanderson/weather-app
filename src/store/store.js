import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';
import {cityReducer} from './reducer';

//Redux-Persist

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, cityReducer);

//Store

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor}