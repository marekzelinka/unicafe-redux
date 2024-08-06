import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import App from './App.jsx'
import { reducer } from './reducer.js'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
const render = () =>
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
  )

render()
store.subscribe(render)
