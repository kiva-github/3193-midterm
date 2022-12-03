import { Outlet } from 'react-router-dom'


// context
import { useUserContext } from '../../hooks/useUserContext'

// datas
import { GRADIENT_DATA } from '../../data/gradients'

// styles
import './MainPage.scss'

export default function MainPage() {
  const { teamIndex } = useUserContext()

  return (
    <div>
      {teamIndex && (
        <div className='main-page-container'
          style={
            {
              background: `radial-gradient(circle, rgba(${GRADIENT_DATA["SEA"][0]}) 25%, rgba(${GRADIENT_DATA["SEA"][1]}) 100%)`
            }
          }
        >
          <Outlet />
        </div>
      )}
    </div>
  )
}