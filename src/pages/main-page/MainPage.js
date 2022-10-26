import { Outlet } from 'react-router-dom'

// styles
import './MainPage.scss'

// components
import Header from '../../components/header/Header'

export default function MainPage() {
  return (
    <div className='main-page-container' style={{backgroundColor:'gray'}}>
        <Header />
        <Outlet />
    </div>
  )
}
