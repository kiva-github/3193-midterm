import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

// components
import Header from '../../components/header/Header'

// datas
import { GRADIENT_DATA } from '../../data/gradients'

// hooks
import { useFirestore } from '../../hooks/useFirestore'

// styles
import './MainPage.scss'

export default function MainPage() {
  const { document, getTeamTheme } = useFirestore()
  
  useEffect(() => {
    getTeamTheme()
  }, [getTeamTheme])

  return (
    <div>
      {document && (
        <div className='main-page-container'
          style={
            {
              background: `radial-gradient(circle, rgba(${GRADIENT_DATA[document][0]}) 25%, rgba(${GRADIENT_DATA[document][1]}) 100%)`
            }
        }>
          <Header />
          <Outlet />
        </div>
      )}
      {!document && (
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