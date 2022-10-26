import { useNavigate } from 'react-router-dom'

// styles
import './SecondaryBtn.scss'

export default function SecondaryBtn({title}) {
  const navigate = useNavigate()

  return (
    <div>
      <button className='secondary-btn' onClick={() => navigate(-1)}>
        <p>{title}</p>
      </button>
    </div>
  )
}
