import { lazy } from 'react'
import RequireAuth from './RequireAuth'
import MainLayout from '@/components/layouts/MainLayout/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// no lazy loading for auth pages to avoid flickering
import { withLoading } from '@/hocs/withLoading.hoc'

const DashboardPages = lazy(() => import('@/pages/Dashboard/Dashboard'))
const Error404Page = lazy(() => import('@/pages/Error404'))
const Logout = lazy(() => import('./Logout'))

const Dashboard = withLoading(DashboardPages)
const Error404 = withLoading(Error404Page)
const LogoutFallback = withLoading(Logout)

// const AuthLayoutFallback = withLoading(AuthLayout)

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  )

  const router = createBrowserRouter([
    {
      path: '/',
      element: protectedLayout,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: '*',
          element: <Error404 />
        }
      ]
    },
    // {
    //   path: 'auth',
    //   element: <AuthLayoutFallback />,
    //   children: [
    //     {
    //       path: 'login',
    //       element: <LoginPage />
    //     }
    //   ]
    // },
    {
      path: 'logout',
      element: <LogoutFallback />
    }
  ])

  return <RouterProvider router={router} />
}
