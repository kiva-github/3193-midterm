// assets
import cardIcon from '../../assets/system/card-icon.png'

// styles
import './CardCount.scss'

export default function CardCount({ count }) {
  return (
    <div className='card-count'>
        <h4>{count}</h4>
        <img src={cardIcon} alt='' />
  </div>
  )
}