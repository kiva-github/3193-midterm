import { useNavigate } from 'react-router-dom'

// assets
import cardIcon from '../../assets/system/card-icon.png'

// styles
import './SeriesCard.scss'

export default function SeriesCard({ alt, img, title, path}) {
    const navigate = useNavigate()
    const val = 100;
    
    return (
        <div className='series-card-container' onClick={() => navigate(`${path}`)}>
            
            <div className='series-info-container'>
                <h1>{title}</h1>
                <div className='series-card-count-container'>
                    <h5>{val}</h5>
                    <img src={cardIcon} alt='' />
                </div>
            </div>

            <div className='series-cover-container'>
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}
