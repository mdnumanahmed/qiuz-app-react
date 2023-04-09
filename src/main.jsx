import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Statistics from './components/Statistics'
import Blogs from './components/Blogs'
import { loadQuiz, loadTopicsAndQuiz } from './utils/loadTopicsAndQuiz'
import MainLayout from './components/MainLayout'
import Topics from './components/Topics'

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
        path: 'topic/:topicId',
        element: <Quiz />,
        loader: ({params}) => loadQuiz(params.topicId)
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
