import { PageTitle } from '@/components/common/PageTitle'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  console.log(t('common.dashboard'))

  return (
    <>
      <PageTitle>{t('common.dashboard')}</PageTitle>
      <Title>{t('common.dashboard')}</Title>
    </>
  )
}

export default Dashboard
