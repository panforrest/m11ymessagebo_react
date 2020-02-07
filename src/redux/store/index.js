import { combineReducers, createStore, applyMiddleware } from 'redux'
import { messageReducer } from '../reducers'

var store;

export default {
  configureStore: () =>{
  	const reducers = combineReducers({
  	  message: messageReducer
  	})

  	store = createStore(
      reducers,
      applyMiddleware()
  	)

  	return store

  },

  currentStore: () => {
  	return store
  }
}

