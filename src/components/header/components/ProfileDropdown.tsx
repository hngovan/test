import { useAppSelector } from '@/hooks/reduxHooks'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Col, Popover } from 'antd'
import { ProfileOverlay } from './ProfileOverlay'

export const ProfileDropdown: React.FC = () => {
  const user = useAppSelector(state => state.admin.admin)

  return user ? (
    <Popover content={<ProfileOverlay />} trigger='click'>
      <Col>
        <Avatar
          src={user?.avatar}
          icon={<UserOutlined />}
          alt='Admin'
          shape='circle'
          size={24}
          className='cursor-pointer'
        />
      </Col>
    </Popover>
  ) : null
}
