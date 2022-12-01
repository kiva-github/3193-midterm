// assets
import cardPlaceholer from '../../assets/cards/2022-blank-base.png'

// components
import Card from '../../components/card/Card'
import CollectionHeader from './components/collection-header/CollectionHeader'

// data
import { US_2022_base } from '../../data/cards-data/2022/US_2022/US_2022_base'

// hooks
import { useCollection } from '../../hooks/useCollection'

// styles
import './Collection.scss'

export default function Collection() {
    const { documents } = useCollection()

    return (
        <div className='collection-container'>
            <CollectionHeader />           
            <div className='cards-collection'>  
                {US_2022_base && documents && US_2022_base.map((card) => (
                    <div key={card.cardNumber}>
                        <div>  
                            <Card img={card.imgs.front}/>
                        </div>
                        <div className='card-number'>
                            <p>{card.cardNumber}</p>
                        </div>
                        {
                            card.name.map((player) => (
                                <div className='card-number'>
                                    <p>{player}</p>
                                </div>
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}