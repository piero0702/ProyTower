import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InitialPage from './components/initialPage/InitialPage.jsx'
import ChatsPasados from './components/chatsPasados/ChatsPasados.jsx'
import Horario from './components/horario/Horario.jsx'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <InitialPage />
    },
    {
      path:"/chatsPasados",
      element: <ChatsPasados/>
    },
    {
      path:"/horario",
      element: <Horario/>
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
