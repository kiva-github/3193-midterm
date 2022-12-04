import { useEffect, useState } from 'react'

// styles
import './ErrorPopup.scss'

export default function ErrorPopup({ message, bgCol }) {
  const [isDisplayed, setIsDisplayed] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(false);
    }, 3000)
  }, [])

  return isDisplayed ?
    <div className='error-popup-container dropshadow' style={{ display: `${isDisplayed}`, backgroundColor: `rgb(${bgCol})`}}>
      <h3>{message}</h3>
    </div>
    :
    null
}
