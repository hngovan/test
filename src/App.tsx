import 'antd/dist/reset.css'
import { ConfigProvider, theme } from 'antd'
import { useLanguage } from './hooks/useLanguage'
import { HelmetProvider } from 'react-helmet-async'
import enUS from 'antd/locale/en_US'
import viVN from 'antd/locale/vi_VN'
import { useAppSelector } from './hooks/reduxHooks'
// import { themeObject } from './styles/themes/themeVariables'
import { Pagination } from 'antd'
import { useThemeWatcher } from './hooks/useThemeWatcher'

const App: React.FC = () => {
  const { language } = useLanguage()
  const themeGloble = useAppSelector(state => state.theme.theme)
  console.log(themeGloble)

  useThemeWatcher()

  return (
    <>
      {/* <meta name='theme-color' content={themeObject[themeGloble].primary} /> */}
      <HelmetProvider>
        <ConfigProvider
          locale={language === 'vn' ? viVN : enUS}
          theme={{
            algorithm: themeGloble === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
          }}
        >
          <Pagination defaultCurrent={6} total={500} />
        </ConfigProvider>
      </HelmetProvider>
    </>
  )
}
export default App
