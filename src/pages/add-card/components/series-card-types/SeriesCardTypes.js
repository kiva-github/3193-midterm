import { useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import Card from '../../../../components/card/Card'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'

// context
import { useAuthContext } from '../../../../hooks/useAuthContext'

// datas
import { seriesTypes } from '../../../../data/seriesTypes'

// firebase
import { doc, collection, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../utils/firebase/config'

// styles
import './SeriesCardTypes.scss'

export default function SeriesCardTypes() {
  const [cardNumber, setCardNumber] = useState('')
  const { series } = useParams()
  const { user } = useAuthContext()

  const updateCards = async (card) => {
    const docRef = doc(db, "users", user.uid, 'cards', card);
    const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'cards'))

    let existingCount = 1
    let totalCards = 1

    // check if card has been added before  
    querySnapshot.forEach((doc) => {
      if (doc.id === card) {
        existingCount = existingCount + doc.data().quantity
      }
      totalCards = totalCards + doc.data().quantity
    })

    // set entered card quantity
    const cardData = { quantity: existingCount }
    await setDoc(docRef, cardData)

    // update cardCount document field
    const cardCountRef = doc(db, 'users', user.uid)
    await updateDoc(cardCountRef, {
      cardCount: totalCards
    })

    setCardNumber('')
  }
  
  const handleAdd = (e) => {
    if (cardNumber > 12 || cardNumber < 1) {
      setCardNumber('')
      alert('Invalid card number (pick between 1-12)')
    } else {
      updateCards(cardNumber)
    }
  }

  return (
    <div className='series-card-types-container'>
      {seriesTypes[series].map((type) => (
        <div key={type.id} className='series-type-container'>
          <div className='card-preview-container'>
            <Card img={type.img}/>
            <h3>{type.title}</h3>
          </div>
          <div className='card-entry-container'>
            <h3>ENTER CARD NUMBER</h3>
            <input
              type='number'
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder='CARD NO.'
              value={cardNumber}
            ></input>
            <div onClick={() => handleAdd()}>
              <SecondaryBtn title='ADD CARD' route=''/>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
