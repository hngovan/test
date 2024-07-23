import { Link } from 'react-router-dom'
import logo from '@/assets/react.svg'
import logoDark from '@/assets/react.svg'
import { useAppSelector } from '@/hooks/reduxHooks'

export const SiderLogo: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme)

  const img = theme === 'dark' ? logoDark : logo

  return (
    <div className='flex h-mobile-header items-center justify-between p-2 md:h-desktop-header md:p-4'>
      <Link className='relative flex items-center overflow-hidden' to='/'>
        <img src={img} alt='POrder' width={48} height={48} />
        <div className='mx-4 my-0 text-lg font-bold text-white'>POrder</div>
      </Link>
    </div>
  )
}
