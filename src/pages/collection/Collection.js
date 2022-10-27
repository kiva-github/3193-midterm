// components
import Card from '../../components/card/Card'
import CollectionHeader from './components/collection-header/CollectionHeader'


// datas
import { CARDS_DATA } from '../../data/cards'

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

                {CARDS_DATA && documents && CARDS_DATA.map((card) => (
                    <div key={card.cardNumber}>
                        <div>  
                            <Card img={card.imgFront} />
                        </div>

                        <div className='card-number'>
                            <p>{card.cardNumber}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
