// import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown'
// import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown'
import { Row, Col, Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { SettingsDropdown } from './components/SettingsDropdown'
import { ProfileDropdown } from './components/ProfileDropdown'

interface MobileHeaderProps {
  toggleSider: () => void
  isSiderOpened: boolean
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <Row justify='space-between' align='middle'>
      <div className='z-50 flex'>
        <Button
          type='text'
          icon={isSiderOpened ? <CloseOutlined /> : <MenuOutlined />}
          onClick={toggleSider}
          className='h-[50px] text-base'
        />
      </div>
      <Col>
        <Row align='middle' gutter={[8, 8]}>
          <Col>
            <SettingsDropdown />
          </Col>
          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
