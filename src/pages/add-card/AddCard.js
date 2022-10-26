import { Outlet } from 'react-router-dom'

// styles
import './AddCard.scss'

// components
import NavHeader from '../../components/nav-header/NavHeader'


export default function AddCard() {
  return (
    <div className='add-card-container'>
        <NavHeader title='ADD A CARD'/>
        <Outlet />
    </div>
  )
}
