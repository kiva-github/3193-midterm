// styles
import './Card.scss'

export default function Card({ img }) {
  return (
    <div className='card-container'>
      <img src={img} alt='' />
    </div>
  )
}