import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducers } from "../reducers/authReducer";
import thunk from 'redux-thunk';
import { productoReducers } from '../reducers/productoReducers';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({

    auth: authReducers,
    product: productoReducers,
    ui: uiReducer

});

export const store = createStore(

    reducers,
    composeEnhancers( applyMiddleware( thunk ) )

);