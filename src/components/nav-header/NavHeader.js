// components
import SecondaryBtn from '../btns/secondary-btn/SecondaryBtn'

// styles
import './NavHeader.scss'

export default function NavHeader({ title }) {
  return (
    <div className='nav-header-container'>
        <SecondaryBtn title='BACK'/>
        <h2>{title}</h2>
    </div>
  )
}