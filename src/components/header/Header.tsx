import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'
import { useResponsive } from '@/hooks/useResponsive'

interface HeaderProps {
  toggleSider: () => void
  isSiderOpened: boolean
}

export const Header: React.FC<HeaderProps> = ({ toggleSider, isSiderOpened }) => {
  const { isTablet } = useResponsive()

  return isTablet ? <DesktopHeader /> : <MobileHeader toggleSider={toggleSider} isSiderOpened={isSiderOpened} />
}
