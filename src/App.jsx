import React from 'react'
import { Outlet,createBrowserRouter } from 'react-router-dom';
import HeaderComponent from "./Components/HeaderComponent"
import FooterComponent from './Components/FooterComponent';
import ErrorPage from "./Pages/ErrorPage";
import AboutUs from "./Pages/AboutUs"
import Contact from "./Pages/Contact"
import Gallery from "./Pages/Gallery"
import Project from "./Pages/Project"
import Home from './Pages/Home';

const App = () => {
  return (
    <>
    <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  )
}

const router = createBrowserRouter([
    {
      path:"/",
      element:<App />,
      errorElement:<ErrorPage />,
      children:[
        {
            path:"/",
            element:<Home />
        },
        {
          path:"/about",
          element:<AboutUs />
        },
        {
          path:"/contact",
          element:<Contact />
        },
        {
          path:"/gallery",
          element:<Gallery />
        },
        
          {
            path:"/project",
            element:<Project />
          },
        
  
      ]
  
    }
  ])
  
  export default router;