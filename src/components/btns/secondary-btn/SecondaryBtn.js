import { useNavigate } from 'react-router-dom'

// styles
import './SecondaryBtn.scss'

export default function SecondaryBtn({title, route=-1}) {
  const navigate = useNavigate()

  return (
    <div>
      <button className='secondary-btn' onClick={() => navigate(route)}>
        <p>{title}</p>
      </button>
    </div>
  )
}