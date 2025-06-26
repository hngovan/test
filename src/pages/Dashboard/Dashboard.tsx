import { PageTitle } from '@/components/common/PageTitle'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Dashboard: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle>{t('common.dashboard')}</PageTitle>
      <Title>{t('common.dashboard')}</Title>
      <div className='button-add-text'>sss</div>
    </>
  )
}

export default Dashboard
