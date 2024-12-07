import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
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
import Landing from './pages/landing/Landing.jsx'
import Cookies from 'js-cookie'
import HomepageOutlet from './pages/homepage/HomepageOutlet.jsx'
const isLoggedIn = ()=>{
  const user = Cookies.get('accessToken')
  console.log(user)
  if(user){
    return <Homepage />
  }
  else return <Landing />
}

const element = isLoggedIn()

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element:<HomepageOutlet />,
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
        element: <Homepage />
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
