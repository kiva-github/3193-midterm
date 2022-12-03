import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'


// datas
import { GRADIENT_DATA } from '../../data/gradients'

// hooks
import { useFirestore } from '../../hooks/useFirestore'

// styles
import './MainPage.scss'

export default function MainPage() {
  const { favoriteTeam, getUserDocs } = useFirestore()
  
  useEffect(() => {
    getUserDocs()
    console.log('MainPage.js: useEffect() ran')
  }, [getUserDocs])

  return (
    <div>
      {favoriteTeam && (
        <div className='main-page-container'
          style={
            {
              background: `radial-gradient(circle, rgba(${GRADIENT_DATA[favoriteTeam][0]}) 25%, rgba(${GRADIENT_DATA[favoriteTeam][1]}) 100%)`
            }
        }>
          <Outlet />
        </div>
      )}
    </div>
  )
}