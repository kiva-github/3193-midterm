// components
import Header from '../../components/header/Header'
import SeriesCard from '../../components/series-card/SeriesCard'

// data
import { PACKS_DATA } from '../../data/packs'

// styles
import './MyCardsYear.scss'

export default function MyCardsYear() {
  return (
    <div className='my-cards-year-container'>
      <Header btnNav={true} navPath={'MY CARDS'} acctStats={true} acctTab={true} />
      <h2>2022</h2>
      <div className='my-cards-year-series-container'>
        {PACKS_DATA && PACKS_DATA.map((pack) => (
            <SeriesCard key={pack.path} alt={pack.alt} img={pack.img} title={pack.title} path={pack.path}/>
        ))}
      </div>
    </div>
  )
}
