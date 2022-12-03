import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

// styles
import './AddCard.scss'

export default function AddCard() {

  return (
    <div className='add-card-container'>
      <Header btnNav={-1} navPath={'ADD A CARD'} acctStats={true} acctTab={true}/>
      <Outlet />
    </div>
  )
}