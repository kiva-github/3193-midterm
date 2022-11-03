// styles
import './HeaderProfilePill.scss'

// assets

export default function HeaderProfilePill({ val, img }) {
  return (
    <div className='header-profile-pill-container'>
        <img src={img} alt='' />
        <p>{val}</p>
    </div>
  )
}
