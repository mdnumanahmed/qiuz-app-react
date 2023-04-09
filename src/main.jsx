import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Topics from './components/Quizes'
import Statistics from './components/Statistics'
import Blogs from './components/Blogs'
import { loadTopicsAndQuiz } from './utils/loadTopicsAndQuiz'
import MainLayout from './components/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: loadTopicsAndQuiz
      },
      {
        path: 'topics',
        element: <Topics/>
      },
      {
        path: 'statistics',
        element: <Statistics/>
      }, 
      {
        path: 'blogs',
        element: <Blogs/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
