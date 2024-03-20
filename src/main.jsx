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


const editProfile = {
  for: 'Edit Profile',
  isFor: true,
  input: 'username'
}
const manageAcc = {
  for: 'Account management',
  isFor: false,
  input: 'password'
}

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
      },
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          {
            path: '',
            element: <EditProfile pageFor={editProfile}/>
          },
          {
            path: 'manage your account',
            element: <EditProfile pageFor={manageAcc}/>
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
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
