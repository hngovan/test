import { useMemo } from 'react'
import { useResponsive } from '@/hooks/useResponsive'
import Sider from 'antd/es/layout/Sider'
import { SiderMenu } from './SiderMenu'
import { SiderLogo } from './SiderLogo'
import Overlay from '@/components/common/Overlay'

interface MainSiderProps {
  isCollapsed: boolean
  setCollapsed: (isCollapsed: boolean) => void
}

export const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive()

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly])

  const toggleSider = () => setCollapsed(!isCollapsed)

  return (
    <>
      <Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        className='!fixed right-0 z-30 max-h-screen min-h-screen overflow-visible md:!relative md:left-0 md:right-auto'
        {...props}
      >
        <SiderLogo />
        <SiderMenu setCollapsed={setCollapsed} />
      </Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  )
}
