// components
import PackCard from '../../components/pack-card/PackCard'

// data
import { PACKS_DATA } from '../../../../data/packs'

// styles
import './YearPacks.scss'

export default function YearPacks() {
  return (
    <div className='year-packs-container'>
      <h2>2022</h2>
      <div className='year-packs'>
        {PACKS_DATA && PACKS_DATA.map((pack) => (
            <PackCard key={pack.path} alt={pack.alt} img={pack.img} title={pack.img} path={pack.path}/>
        ))}
      </div>
    </div>
  )
}