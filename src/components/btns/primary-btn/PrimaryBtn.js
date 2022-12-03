// styles
import './PrimaryBtn.scss'

export default function PrimaryBtn({ title }) {
  return (
    <div>
      <button className='primary-btn dropshadow'>
        <p>{title}</p>
      </button>
    </div>
  )
}