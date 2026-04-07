// ** Router imports
import { lazy } from 'react'

// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from '../utility/Utils'

// ** Components
const Error = lazy(() => import('../views/pages/misc/Error'))
const Login = lazy(() => import('../views/pages/authentication/Login'))
const NotAuthorized = lazy(() => import('../views/pages/misc/NotAuthorized'))

const AllMenu = lazy(() => import('../views/pages/allmenu/AllMenu'))

const Router = ({ allRoutes }) => {
  const getHomeRoute = () => {
    const user = getUserData()
    if (user) {
      return getHomeRouteForLoggedInUser(user.role)
    } else {
      return '/login'
    }
  }

  const routes = useRoutes([
    {
      path: '/test',
      index: true,
      element: <Navigate replace to={getHomeRoute()} />
    },
    {
      path: '/',
      element: <BlankLayout />,
      children: [{ path: '/', element: <AllMenu /> }]
    },
    // {
    //   path: '/auth/not-auth',
    //   element: <BlankLayout />,
    //   children: [{ path: '/auth/not-auth', element: <NotAuthorized /> }]
    // },
    // {
    //   path: '*',
    //   element: <BlankLayout />,
    //   children: [{ path: '*', element: <Error /> }]
    // },
    ...allRoutes
  ])

  return routes
}

export default Router
