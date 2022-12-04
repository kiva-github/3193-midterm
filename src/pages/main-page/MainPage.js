import { Outlet } from 'react-router-dom'

// context
import { useGradientContext } from '../../hooks/useGradientContext'

// styles
import './MainPage.scss'

export default function MainPage() {
  const { previewedGradients, selectedGradients } = useGradientContext()

  return (
    <div>
      {selectedGradients && (
        <div className='main-page-container'
          style={
            {
              background: `radial-gradient(circle, rgba(${previewedGradients ? previewedGradients['0'] : selectedGradients['0']}) 25%, rgba(${previewedGradients ? previewedGradients['1'] : selectedGradients['1']}) 100%)`
            }
          }
        >
          <Outlet />
        </div>
      )}
    </div>
  )
}