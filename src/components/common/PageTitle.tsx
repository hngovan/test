import { WithChildrenProps } from '@/types/generalTypes'
import { Helmet } from 'react-helmet-async'

export const PageTitle: React.FC<WithChildrenProps> = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | POrder</title>
    </Helmet>
  )
}
