import {combineReducers} from 'redux'
import books from '../book/bookReducers'

export default combineReducers({
  books: books
})
