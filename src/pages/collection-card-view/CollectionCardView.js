import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import AttributePill from '../../components/attribute-pill/AttributePill'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'

// data
import { S1_22_base } from '../../data/cards-data/2022/S1_22/S1_22_base'

// styles
import './CollectionCardView.scss'

export default function CollectionCardView() {
    const { cardNumber } = useParams()
    const displayedCard = S1_22_base[cardNumber - 1]
    const [displayedCardAttrs, setDisplayedCardAttrs] = useState(null)
    
    useEffect(() => {
        if (displayedCard.cardAttributes.length !== 0) {
            console.log(displayedCard.cardAttributes.length)
            console.log('multiple players')
            let cardAttributesTemp = displayedCard.cardAttributes
            let counter = 0;
            cardAttributesTemp.forEach((attr) => {
                if (counter !== cardAttributesTemp.length - 1) {
                    attr += ' / '
                }
            })
            setDisplayedCardAttrs(cardAttributesTemp)
        }
    }, [displayedCard])

    return (
        <div className='collection-card-view-container'>
            <Header btnNav={true} navPath={displayedCard.cardNumber} acctStats={true} acctTab={true}/>

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
                        {displayedCardAttrs ? displayedCardAttrs.map((attr) => (
                                <AttributePill key={attr} label={attr.toUpperCase()} borderCol={'#FFFFFF'} />
                            ))
                        :
                        displayedCard.cardAttributes.map((attr) => (
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
        </div>
    )
}
