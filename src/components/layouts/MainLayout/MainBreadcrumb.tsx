import React from 'react'
import { Breadcrumb } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

export const MainBreadcrumb: React.FC = () => {
  const { t } = useTranslation()

  const capitalizeChar = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const location = useLocation()
  const pathSnippets: string[] = location.pathname.split('/').filter(i => i)
  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const title = snippet.replace(/-/g, ' ')
    const isLast = index === pathSnippets.length - 1

    return {
      key: url,
      title: isLast ? capitalizeChar(title) : <Link to={url}>{capitalizeChar(title)}</Link>
    }
  })

  const items = [
    {
      key: 'dashboard',
      title: <Link to='/'>{t('common.dashboard')}</Link>
    },
    ...breadcrumbItems
  ]

  return (
    <>
      <Breadcrumb className='mb-3 text-base md:mb-6' items={items} />
    </>
  )
}
