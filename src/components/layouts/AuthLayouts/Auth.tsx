import { Outlet } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
