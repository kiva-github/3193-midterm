import { Outlet } from 'react-router-dom'

// styles
import './MainPage.scss'

import { useUserContext } from '../../hooks/useUserContext'

// components
import Header from '../../components/header/Header'

export default function MainPage() {
  const { teamGradient } = useUserContext()
  return (
    <div className='main-page-container'
        style={
            {
                background: `radial-gradient(circle, rgba(${teamGradient[0]}) 25%, rgba(${teamGradient[1]}) 100%)`
            }
    }>
        <Header />
        <Outlet />
    </div>
  )
}
