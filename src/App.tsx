import 'antd/dist/reset.css'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider, theme } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { useThemeWatcher } from './hooks/useThemeWatcher'
import { useAppSelector } from './hooks/reduxHooks'
import { useLanguage } from './hooks/useLanguage'
import { themeConfig } from './theme/config'
import { AppRouter } from './router/AppRouter'
import enUS from 'antd/locale/en_US'
import viVN from 'antd/locale/vi_VN'

const App: React.FC = () => {
  const { language } = useLanguage()
  const themeGlobal = useAppSelector(state => state.theme.theme)

  useThemeWatcher()

  return (
    <>
      <HelmetProvider>
        <StyleProvider layer>
          <ConfigProvider
            locale={language === 'vn' ? viVN : enUS}
            theme={{
              ...themeConfig,
              algorithm: themeGlobal === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
              hashed: false
            }}
          >
            <AppRouter />
          </ConfigProvider>
        </StyleProvider>
      </HelmetProvider>
    </>
  )
}
export default App
