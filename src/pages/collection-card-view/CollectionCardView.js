import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import AttributePill from '../../components/attribute-pill/AttributePill'
import Card from '../../components/card/Card'

// context
import { useCardContext } from '../../hooks/useCardContext'

// styles
import './CollectionCardView.scss'

export default function CollectionCardView() {
    const { cardNum } = useParams()
    const { cardData } = useCardContext()
    const [displayedCard, setDisplayedCard] = useState(null)

    useEffect(() => {
        if (cardData) {
            if (cardNum) {
                const lowerRange = cardData[0].cardNumber
                setDisplayedCard(cardData[cardNum - lowerRange])
            }
        }
    }, [cardNum, cardData])

    return (
        <div className='collection-card-view-container'>
            {displayedCard &&
                <div className='card-content'>
                    <div className='card-details-container'>
                        <h1>{displayedCard.cardNumber}</h1>
                        <div className='names-container'>
                            {displayedCard.name.map((n) => (
                                <p key={Math.random()}>{n.toUpperCase()}</p>
                            ))}
                        </div>
                        <div className='attributes-container'>
                            <AttributePill label={displayedCard.cardType.toUpperCase()} borderCol={'#FFFFFF'} />
                            {displayedCard.cardAttributes.map((attr) => (
                                <AttributePill key={attr} label={attr.toUpperCase()} borderCol={'#FFFFFF'} />
                            ))}
                        </div>
                    </div>
                    <div className='card-container'>
                        <>
                            <Card img={displayedCard.imgs.front}/>
                        </> 
                    </div>
                </div>
            }
        </div>
    )
}
