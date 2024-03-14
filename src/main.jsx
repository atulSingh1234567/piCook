import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import './index.css'
import Homepage from './pages/homepage/Homepage'
import Explore from './pages/explorepage/Explore'
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/explore',
        element: <Explore />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
