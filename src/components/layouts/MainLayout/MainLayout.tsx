import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { MainHeader } from './MainHeader'
import { MainSider } from './Sider/MainSider'
import { MainFooter } from './MainFooter'
import { Header } from '@/components/header/Header'

const { Content } = Layout

const MainLayout: React.FC = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(true)

  const toggleSider = () => setSiderCollapsed(!siderCollapsed)

  return (
    <Layout hasSider className='h-screen'>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <Layout>
        <MainHeader>
          <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} />
        </MainHeader>
        <Content className='flex flex-col justify-between overflow-auto py-desktop-vertical md:px-desktop-horizontal'>
          <Outlet />
          <MainFooter />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
