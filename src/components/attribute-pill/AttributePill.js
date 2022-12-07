// styles
import './AttributePill.scss'

export default function AttributePill({ borderCol, label }) {
  return (
    <div className='attribute-pill-container' style={{ border: `2px solid ${borderCol}`}}>
        <h5>{ label }</h5>
    </div>
  )
}