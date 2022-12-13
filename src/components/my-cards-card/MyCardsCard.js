import { useNavigate } from 'react-router-dom'

// assets
import cardIcon from '../../assets/system/card-icon.png'

// styles
import './MyCardsCard.scss'

export default function MyCardsCard({ navRoute='', cardCount = "-" }) {
    const navigate = useNavigate()
    
    return (
        <div className='my-cards-card-container' onClick={() => navigate(`/my-cards/${navRoute}`)}>
            <div className='card-details'>
                <h1>2022</h1>
                <div className='card-count'>
                    <h5>{cardCount}</h5>
                    <img src={cardIcon} alt='' />
                </div>
            </div>
        </div>
    )
}