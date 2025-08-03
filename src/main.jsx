import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import "./output.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from "../Layout.jsx"
import Home from "./pages/Home/Home"
import { store } from './store/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<Layout />}>
        <Route path='' element={<Home />} />
      </Route>
      <Route path='*' element={<h1
        className='text-3xl grid justify-center items-center min-h-screen'
      >URL Does Not Exist</h1>} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>,
)
