import { useNavigate, useParams } from 'react-router-dom'

// components
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'

// data
import { S1_22_base } from '../../data/cards-data/2022/S1_22/S1_22_base'

// styles
import './MyCards.scss'

export default function MyCards() {
    const navigate = useNavigate()
    const { year, series } = useParams()
    const seriesLabel = series + '1'

    return (
        <div className='my-cards-container'>  
            <Header btnNav={true} navPath={`${year} / ${seriesLabel}`} acctStats={true} acctTab={true} />       
            <div className='cards-collection'>  
                {S1_22_base.map((card) => (
                    <div key={card.cardNumber} className='card-container'>
                        <div onClick={() => navigate(`${card.cardNumber}`)}>
                            <Card img={card.imgs.front}/>
                        </div>
                        <div className='card-number panel-bg'>
                            <h5>{card.cardNumber}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}