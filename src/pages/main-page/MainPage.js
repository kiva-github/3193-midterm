import { Outlet } from 'react-router-dom'

// styles
import './MainPage.scss'

// datas
import { GRADIENT_DATA } from '../../data/gradients'

// hooks
import { useFirestore } from '../../hooks/useFirestore'
import { useUserContext } from '../../hooks/useUserContext'

// components
import Header from '../../components/header/Header'
import { useEffect } from 'react'

export default function MainPage() {
  const { teamGradient } = useUserContext()
  const { getTeamTheme } = useFirestore()

  useEffect(() => {
    getTeamTheme()
  }, [teamGradient])

  return (
    <div>
      {teamGradient && (
        <div className='main-page-container'
          style={
            {
              background: `radial-gradient(circle, rgba(${GRADIENT_DATA[teamGradient][0]}) 25%, rgba(${GRADIENT_DATA[teamGradient][1]}) 100%)`
            }
        }>
          <Header />
          <Outlet />
        </div>
      )}
      {!teamGradient && (
        <div className='main-page-container'
          style={
            {
              background: `radial-gradient(circle, rgba(${GRADIENT_DATA[12][0]}) 25%, rgba(${GRADIENT_DATA[12][1]}) 100%)`
            }
        }>
          <Header />
          <Outlet />
        </div>
      )}
    </div>
  )
}
