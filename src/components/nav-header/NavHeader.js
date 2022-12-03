// components
import TertiaryBtn from '../btns/tertiary-btn/TertiaryBtn'

// styles
import './NavHeader.scss'


export default function NavHeader({ title }) {
  return (
    <div className='nav-header-container'>
        <TertiaryBtn title='BACK'/>
        <h2>{title}</h2>
    </div>
  )
}