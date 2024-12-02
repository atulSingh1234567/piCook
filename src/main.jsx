import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import './index.css'
import Homepage from './pages/homepage/Homepage'
import Explore from './pages/explorepage/Explore'
import ExploreAfter from './pages/explorepage/ExploreAfter'
import Login from './components/login/Login'
import Profile from './pages/profile/Profile'
import SettingsLayout from './pages/settings/SettingsLayout.jsx'
import EditProfile from './pages/settings/EditProfile.jsx'
import ExploreForNot from './pages/explorepage/ExploreForNot.jsx'
import Pinpage from './pages/pin/Pinpage.jsx'
import ManageAccount from './pages/settings/ManageAccount.jsx'
import Post from './pages/postPhotoPage/Post.jsx'
import Saved from './pages/profile/Saved.jsx'
import CreatedPin from './pages/profile/CreatedPin.jsx'

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
        element: <Login operate='Login' google='Continue' isSignup={false}/>
      },
      {
        path: 'signup',
        element: <Login operate='Continue' google='Sign up' isSignup={true}/>
      },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            path: '',
            element: <Saved />
          },
          {
            path: 'saved',
            element: <Saved />
          },
          {
            path: 'created-pin',
            element: <CreatedPin />
          }
        ]
      },
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          {
            path: 'edit profile',
            element: <EditProfile/>
          },
          {
            path: 'manage your account',
            element: <ManageAccount/>
          }
        ]
      },
      {
        path: 'today',
        element: <Explore />
      },
      {
        path: 'ideas',
        element: <ExploreForNot />
      },
      {
        path: 'pin/:uId',
        element: <Pinpage />
      },
      {
        path: 'create-your-pin',
        element: <Post />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
