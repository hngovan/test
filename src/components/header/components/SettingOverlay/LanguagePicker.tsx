import { useLanguage } from '@/hooks/useLanguage'
import { Space, Radio } from 'antd'

export const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <Radio.Group defaultValue={language} onChange={e => setLanguage(e.target.value)}>
      <Space direction='vertical'>
        <Radio value='en'>
          <Space align='center'>English</Space>
        </Radio>
        <Radio value='vn'>
          <Space align='center'>Vietnamese</Space>
        </Radio>
      </Space>
    </Radio.Group>
  )
}
