import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../combinedReducers'

export default function configureStore(initState) {
  return createStore(rootReducer, initState,
    applyMiddleware(thunk)
  )
}
