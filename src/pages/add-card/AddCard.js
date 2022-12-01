import { Outlet } from 'react-router-dom'

// styles
import './AddCard.scss'

export default function AddCard() {

  return (
    <div className='add-card-container'>
        <Outlet />
    </div>
  )
}