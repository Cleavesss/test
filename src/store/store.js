import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { personReducer } from "./reducers/persReducer.js";
import {uploadReducer} from "./reducers/uploadReducer.js";
import { loginReducer } from "./reducers/loginReducer.js";
import { filesReducer } from "./reducers/filesReducer.js";
import { currentUserReducer } from "./reducers/currentUserReducer.js";
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReduser = combineReducers({
    persons: personReducer,
    upload: uploadReducer,
    login: loginReducer,
    current: currentUserReducer,
    files: filesReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['current', 'files', 'login']
}


const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store)
export default store