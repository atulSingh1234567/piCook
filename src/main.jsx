import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import './index.css'
import Homepage from './pages/homepage/Homepage'
import Explore from './pages/explorepage/Explore'
import ExploreAfter from './pages/explorepage/ExploreAfter'
import Login from './components/login/Login'
import Profile from './pages/profile/Profile'
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
        path: 'explore',
        element: <Explore />
      },
      {
        path: 'explore/:description',
        element: <ExploreAfter />
      },
      {
        path: 'login',
        element: <Login operate='Log in' google='Continue' isSignup={false}/>
      },
      {
        path: 'signup',
        element: <Login operate='Continue' google='Sign up' isSignup={true}/>
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
