import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// assets
import blankCard from '../../../../assets/cards/2022-blank-base.png'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import ErrorPopup from '../../../../components/error-popup/ErrorPopup'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'
import TertiaryBtn from '../../../../components/btns/tertiary-btn/TertiaryBtn'

// data
import { US_2022_base } from '../../../../data/cards-data/2022/US_2022/US_2022_base'

// styles
import './EnterCard.scss'

export default function EnterCard({ col }) {
    const [cardNumber, setCardNumber] = useState('')
    const [cardQuantity, setCardQuantity] = useState(1)
    const [currCard, setCurrCard] = useState(null)
    const [error, setError] = useState(null)
    const { type } = useParams()

    const handleClick = () => {
        if (!currCard) {
            setError("Could not find card.")
        } else {
            console.log(currCard, cardNumber)
        }
        // check if card number is valid
        // retreive card collection data
        // add / update card value in collection

        console.log(type)
    }

    useEffect(() => {
        if (parseInt(cardNumber) <= 330) {
            setCurrCard(US_2022_base[cardNumber - 1])
        } else {
            setCurrCard(null)
        }
    }, [cardNumber])

    const adjustQuantity = (step) => {
        const currCount = cardQuantity;
        if (currCount === 1 && step === -1) {
            return
        } else if (currCount === 99 && step === 1) {
            return
        } else {
            setCardQuantity(currCount + step)
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
                    <InputBar type='text' col={col} pH='ENTER CARD NUMBER' value={cardNumber.toUpperCase()} updateValue={setCardNumber}/>
                </InputsContainer>
            </div>

            <div className='enter-card-btns-container'>
                <div onClick={() => adjustQuantity(-1)}>
                    <TertiaryBtn title={"-"} route={null}/>
                </div>

                <div onClick={handleClick}>
                    <PrimaryBtn title={`ADD ${cardQuantity}x`} />
                </div>

                <div onClick={() => adjustQuantity(1)}>
                    <TertiaryBtn title={"+"} route={null}/>
                </div>
            </div>

            {error && <ErrorPopup message={"Could not find that card."} />}
        </div>
    )
}
