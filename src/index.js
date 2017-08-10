import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import * as bookActions from './book/bookActions'

const store = configureStore()
store.dispatch(bookActions.fetchBooks())

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
