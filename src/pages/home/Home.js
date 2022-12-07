import { useNavigate } from 'react-router-dom'

// assets
import addIcon from '../../assets/system/add-icon.png'
import TertiaryBtn from '../../components/btns/tertiary-btn/TertiaryBtn'

// components
import CollectionCard from '../../components/collection-card/CollectionCard'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MyCardsCard from '../../components/my-cards-card/MyCardsCard'

// styles
import './Home.scss'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className='home-container'>
        <Header acctStats={true} acctTab={true} />

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
              <MyCardsCard navRoute={'2022'}/>
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