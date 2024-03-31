import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Add from './components/Add.jsx'
import Signup from './components/signup.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'

const router=createBrowserRouter([
  {
    path:'/',
    element: <Signup/>
  },
  {
    path:'/app',
    element: <App/>
  },
  {
    path:'/add',
    element: <Add/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
