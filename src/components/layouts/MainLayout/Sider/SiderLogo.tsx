import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks/reduxHooks'
import logo from '@/assets/react.svg'
import logoDark from '@/assets/react.svg'
import { useResponsive } from '@/hooks/useResponsive'

export const SiderLogo: React.FC = () => {
  const { Title } = Typography

  const { isDesktop } = useResponsive()

  const theme = useAppSelector(state => state.theme.theme)

  const img = theme === 'dark' ? logoDark : logo

  return (
    <div className='flex h-mobile-header items-center justify-between bg-white p-2 md:h-desktop-header md:p-4 dark:bg-[#001529]'>
      <Link className='relative flex items-center justify-center overflow-hidden' to='/'>
        <img src={img} alt='POrder' width={46} height={46} />
        {isDesktop && <Title className='my-0 px-4 text-lg font-bold'>POrder</Title>}
      </Link>
    </div>
  )
}
