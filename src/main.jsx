import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './assets/Router/Router'
import AuthProvider, { } from './Provider/AuthProvider/AuthProvider'
import { ParallaxProvider } from 'react-scroll-parallax'




ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <ParallaxProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ParallaxProvider>
  </AuthProvider>

)
