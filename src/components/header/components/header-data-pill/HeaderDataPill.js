// styles
import './HeaderDataPill.scss'

export default function HeaderDataPill({ val, img }) {
  return (
    <div className='header-data-pill-container'>
        <p>{val}</p>
        <img src={img} alt='' />
    </div>
  )
}
