import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {path:"/",element:<Home/>},
      {path:"/Contact",element:<Contact/>},
      {path:"/About", element:<About/> },
    ],

  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
