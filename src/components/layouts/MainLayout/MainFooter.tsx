import { Footer } from 'antd/es/layout/layout'

export const MainFooter: React.FC = () => {
  return <Footer style={{ textAlign: 'center' }}>POrder ©{new Date().getFullYear()}</Footer>
}
