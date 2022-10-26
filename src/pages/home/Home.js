import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// styles
import './Home.scss'

// data
import { CAROUSEL_IMAGES } from '../../data/carousel'

// components
import Header from '../../components/header/Header'

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)


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
             {/* add View All btn here eventually */}
          </div>
          
          <div className='cards'>
              <div className='card'>
                <h3>Add a card</h3>
                <div className='card-content'></div>
              </div>
              <div className='card'>
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
