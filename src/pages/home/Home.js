import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import './Home.scss'

// data
import { CAROUSEL_IMAGES } from '../../data/carousel'

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
            <h2>MY COLLECTION</h2>
          </div>
          
          <div className='cards'>
              <div className='card' onClick={() => navigate('/add')}>
                <h3>Add a card</h3>
                <div className='card-content'></div>
              </div>
              <div className='card' onClick={() => navigate('/collection/2022')}>
                <h3>2022</h3>
                <div className='card-content'></div>
              </div>
          </div>
        </div>

        <div className='cards-row-container'>
          <div className='row-header'>
            <h2>EXPLORE</h2>
             {/* add View All btn here eventually */}
          </div>
          
          <div className='cards'>
              <div className='card'>
                <h3>Collections</h3>
                <div className='card-content'></div>
              </div>
          </div>
        </div>
    </div>
  )
}
