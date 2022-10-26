// styles
import './SecondaryBtn.scss'

export default function SecondaryBtn({title}) {
  return (
    <div>
      <button className='secondary-btn'>
        <p>{title}</p>
      </button>
    </div>
  )
}
