// styles
import './CardType.scss'

export default function CardType({ typeName }) {
  return (
    <div className='card-type-container'>
        <h3>{typeName}</h3>
    </div>
  )
}
