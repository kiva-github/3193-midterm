import { useNavigate } from 'react-router-dom'

// styles
import './PackCard.scss'

export default function PackCard({ alt, img, path }) {
  const navigate = useNavigate()

  return (
    <div className='pack-card-container' onClick={() => navigate(path)}>
        <div className='pack-img'>
            <img src={img} alt={alt} />
        </div>
        <h3>{alt}</h3>
    </div>
  )
}