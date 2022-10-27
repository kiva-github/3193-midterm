import { Outlet } from 'react-router-dom'

// components
import NavHeader from '../../components/nav-header/NavHeader'

// styles
import './AddCard.scss'

export default function AddCard() {
  return (
    <div className='add-card-container'>
        <NavHeader title='ADD A CARD'/>
        <Outlet />
    </div>
  )
}