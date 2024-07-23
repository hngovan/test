import React from 'react'
// import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown'
// import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown'
import { Row, Col, Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useResponsive } from '@/hooks/useResponsive'
import { ThemePicker } from './components/ThemePicker'

interface DesktopHeaderProps {
  toggleSider: () => void
  isSiderOpened: boolean
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  const { tabletOnly } = useResponsive()

  return (
    <Row justify='space-between' align='middle'>
      <Col>
        {tabletOnly && (
          <Button
            type='text'
            icon={isSiderOpened ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSider}
            className='text-base'
          />
        )}
      </Col>
      <Col>
        <Row align='middle' justify='end' gutter={[5, 5]}>
          <Col>
            <ThemePicker />
          </Col>
          <Col>{/* <ProfileDropdown /> */}</Col>
        </Row>
      </Col>
    </Row>
  )
}
