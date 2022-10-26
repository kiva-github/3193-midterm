// styles
import './YearPacks.scss'

// datas
import { PACKS_DATA } from '../../../../data/packs'

// components
import PackCard from '../../components/pack-card/PackCard'

export default function YearPacks() {
  return (
    <div className='year-packs-container'>
    <h2>2022</h2>
    <div className='year-packs'>
        {PACKS_DATA && PACKS_DATA.map((pack) => (
            <PackCard alt={pack.alt} img={pack.img} title={pack.img} path={pack.path}/>
        ))}
    </div>
</div>
  )
}
