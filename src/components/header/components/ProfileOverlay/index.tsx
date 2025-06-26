import { useTranslation } from 'react-i18next'
import { Avatar, Divider, Modal, Space } from 'antd'
import { LoginOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useNavigate } from 'react-router-dom'

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation()
  const user = useAppSelector(state => state.admin.admin)
  const navigate = useNavigate()

  const handleLogout = () => {
    Modal.confirm({
      title: t('modal.logout.title'),
      content: t('modal.logout.content'),
      okText: t('modal.confirm'),
      cancelText: t('modal.cancel'),
      onOk: () => {
        navigate('/logout')
      }
    })
  }

  const items = [
    {
      key: 'profile',
      label: t('common.profile'),
      icon: <ProfileOutlined />
    },
    {
      key: 'logout',
      label: t('common.logout'),
      icon: <LoginOutlined />,
      onClick: handleLogout
    }
  ]

  return (
    <div {...props} className='flex w-[264px] flex-col'>
      {user && (
        <Space direction='horizontal' size={12} className='py-3'>
          <Avatar src={user.avatar} icon={<UserOutlined />} alt='avatar' shape='circle' size={36} />
          <div className='flex flex-col'>
            <span className='truncate text-lg font-semibold leading-[22px]'>{`${user.first_name} ${user.last_name}`}</span>
            <span>{user.username}</span>
          </div>
        </Space>
      )}
      <Divider className='my-0' />
      <Space direction='vertical' size={0}>
        {items.map(item => (
          <>
            <div key={item.key} onClick={item.onClick} className='flex cursor-pointer gap-3 py-3'>
              <div>{item.icon}</div>
              <div>{item.label}</div>
            </div>
            <Divider className='my-0' />
          </>
        ))}
      </Space>
    </div>
  )
}
