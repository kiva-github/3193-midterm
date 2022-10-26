// styles
import './Collection.scss'

// datas
import { CARDS_DATA } from '../../data/cards'

// components
import Card from '../../components/card/Card'
import CollectionHeader from './components/collection-header/CollectionHeader'

export default function Collection() {
    return (
        <div className='collection-container'>
            <CollectionHeader />            
            <div className='cards-collection'>            
                {CARDS_DATA && CARDS_DATA.map((card) => (
                    <div>
                        <Card img={card.imgFront}/>
                        <div className='card-number'>
                            <p>{card.cardNumber}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
