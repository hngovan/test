import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useResponsive } from '@/hooks/useResponsive'
import logo from '@/assets/react.svg'
import logoDark from '@/assets/react.svg'
import { useAppSelector } from '@/hooks/reduxHooks'

interface SiderLogoProps {
  isSiderCollapsed: boolean
  toggleSider: () => void
}

export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive()

  const theme = useAppSelector(state => state.theme.theme)

  const img = theme === 'dark' ? logoDark : logo

  return (
    <div className='flex h-mobile-header items-center justify-between p-4 md:h-desktop-header'>
      <Link className='relative flex items-center overflow-hidden' to='/'>
        <img src={img} alt='vite+react' width={48} height={48} />
        <div className='mx-4 my-0 text-lg font-bold text-white'>POrder</div>
      </Link>
      {tabletOnly && (
        <button
          className={`absolute right-2 border border-solid transition-all duration-200 ease-in-out ${
            isSiderCollapsed ? '-right-4' : 'right-2'
          } text-secondary-color bg-collapse-background-color hover:text-secondary-color hover:bg-primary-color focus:text-secondary-color focus:bg-primary-color border-border-color`}
          onClick={toggleSider}
        >
          <RightOutlined rotate={isSiderCollapsed ? 0 : 180} />
        </button>
      )}
    </div>
  )
}
