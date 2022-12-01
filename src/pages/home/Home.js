import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// assets
import addIcon from '../../assets/system/add-icon.png'
import TertiaryBtn from '../../components/btns/tertiary-btn/TertiaryBtn'

// components
import CollectionCard from '../../components/collection-card/CollectionCard'
import Footer from '../../components/footer/Footer'
import MyCardsCard from '../../components/my-cards-card/MyCardsCard'

// data
import { CAROUSEL_IMAGES } from '../../data/carousel'

// styles
import './Home.scss'

export default function Home() {
  const [seconds, setSeconds] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
      if (seconds >= 3 ) {
        if (carouselIndex >= CAROUSEL_IMAGES.length - 1) {
          setCarouselIndex(0)
        } else {
          setCarouselIndex(carouselIndex + 1)
        }
        setSeconds(0)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [seconds, carouselIndex])

  return (
    <div className='home-container'>
        <div className='carousel-container'>
          <div className='carousel-image'>
            <img src={CAROUSEL_IMAGES[carouselIndex].img} alt={CAROUSEL_IMAGES[carouselIndex].alt} />
          </div>
          <div className='pagination'>
            {CAROUSEL_IMAGES.map((slide) => (
              <div key={slide.id} id={slide.id} className={carouselIndex === slide.id ? 'page-circle active' : 'page-circle'}></div>
            ))}
          </div>
        </div>

        <div className='cards-row-container'>
          <div className='row-header'>
            <h2>MY CARDS</h2>
          </div>
          
          <div className='cards'>
              <div className='card' onClick={() => navigate('/add')}>
                <h3>Add a card</h3>
                <div className='card-content'>
                  <img className='add-icon' src={addIcon} alt='' />
                </div>
              </div>
              <MyCardsCard path={'/collection/2022'}/>
          </div>
        </div>

        <div className='cards-row-container'>
          <div className='row-header'>
            <h2>COLLECTIONS</h2>
            <TertiaryBtn title={"VIEW ALL"} route={'/collections'} />
          </div>
          
          <div className='cards'>
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
              <CollectionCard />
          </div>
        </div>
        <Footer />
    </div>
  )
}