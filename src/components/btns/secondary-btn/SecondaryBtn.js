import { useNavigate } from 'react-router-dom'

// styles
import './SecondaryBtn.scss'

export default function SecondaryBtn({title, route=null}) {
  const navigate = useNavigate()

  const handleAction = () => {
    if (route) {
      navigate(route)
    }
  }

  return (
    <div>
      <button className='secondary-btn' onClick={handleAction}>
        <p>{title}</p>
      </button>
    </div>
  )
}