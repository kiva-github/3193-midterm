// components
import SeriesCard from '../../../../components/series-card/SeriesCard'

// data
import { PACKS_DATA } from '../../../../data/packs'

// styles
import './SeriesSelection.scss'

export default function SeriesSelection() {
  return (
    <div className='year-container'>
      <h2>2022</h2>
      <div className='series-container'>
        {PACKS_DATA && PACKS_DATA.map((pack) => (
            <SeriesCard key={pack.path} alt={pack.alt} img={pack.img} title={pack.title} path={pack.path}/>
        ))}
      </div>
    </div>
  )
}