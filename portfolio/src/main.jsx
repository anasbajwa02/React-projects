import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About'
import Theme from './components/Theme/Theme'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import { ThemeProvider } from './context/themeState.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
       {path:"/",element:<Home/>},
      {path:"/Contact",element:<Contact/>},
      {path:"/About", element:<About/> },
      {path:"/Projects",element:<Projects/>},
      {path:"/Theme", element:<Theme/> },

    ] 
   },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
   <RouterProvider router ={router}></RouterProvider>
  </ThemeProvider>
  </StrictMode>,
)
