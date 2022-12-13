import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// assets
import blankCard from '../../../../assets/cards/2022-blank-base.png'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'
import TertiaryBtn from '../../../../components/btns/tertiary-btn/TertiaryBtn'

// context
import { useCardContext } from '../../../../hooks/useCardContext'

// hooks
import { useFirestore } from '../../../../hooks/useFirestore'

// styles
import './EnterCard.scss'

export default function EnterCard() {
    const [enteredCardNumber, setEnteredCardNumber] = useState('')
    const [cardQuantity, setCardQuantity] = useState(1)
    const [currCard, setCurrCard] = useState(null)
    const { cardData } = useCardContext()
    const { series, category, type } = useParams()
    const { addCard } = useFirestore()

    const handleClick = () => {
        if (!currCard) {
            alert("Card not found.")
        } else {
            if (!cardData) {
                alert("Error loading cards.")
            } else {
                addCard(series, category, type, currCard, cardQuantity)
                    .then(() => {
                        alert('Card added!')
                    })
            }
        }  
    }

    useEffect(() => {
        if (enteredCardNumber) {
            if (cardData) {
                const lowerRange = cardData[0].cardNumber
                const upperRange = cardData[cardData.length - 1].cardNumber
                if (parseInt(enteredCardNumber) >= lowerRange && parseInt(enteredCardNumber) <= upperRange) {
                    setCurrCard(cardData[enteredCardNumber - lowerRange])
                } else {
                    setCurrCard(null)
                }
            }
        }
    }, [cardData, enteredCardNumber])

    const adjustQuantity = (step) => {
        if (currCard !== null) {
            const currCount = cardQuantity;
            if (currCount === 1 && step === -1) {
                return
            } else if (currCount === 99 && step === 1) {
                return
            } else {
                setCardQuantity(currCount + step)
            }
        }
    }

    return (
        <div className='enter-card-container'>
            <div className='card-image-container'>
                {!currCard && <img src={blankCard} alt='' />}
                {currCard && <img src={currCard.imgs.front} alt='' />}
            </div>
            
            <div style={{ width:"420px"}}>
                <InputsContainer>
                    <InputBar type='text' pH='ENTER CARD NUMBER' value={enteredCardNumber.toUpperCase()} updateValue={setEnteredCardNumber}/>
                </InputsContainer>
            </div>

            <div className='enter-card-btns-container'>
                <div onClick={() => adjustQuantity(-1)}>
                    <TertiaryBtn title={"-"} route={null} disabled={currCard === null}/>
                </div>

                <div onClick={handleClick}>
                    <PrimaryBtn title={`ADD ${cardQuantity}x`} disabled={currCard === null} />
                </div>

                <div onClick={() => adjustQuantity(1)}>
                    <TertiaryBtn title={"+"} route={null} disabled={currCard === null}/>
                </div>
            </div>
        </div>
    )
}