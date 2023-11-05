import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer'
import createSagaMiddleware from "@redux-saga/core";
import fetchData from "./Saga";
const sagaMiddleware = createSagaMiddleware()

const store =configureStore({
    reducer:rootReducer,
    middleware: ()=>[sagaMiddleware]
});

sagaMiddleware.run(fetchData)


export default store;