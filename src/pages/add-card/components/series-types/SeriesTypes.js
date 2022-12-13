import { useNavigate, useParams } from 'react-router-dom'

// components
import CardType from '../card-type/CardType'

// datas
import { seriesTypes } from '../../../../data/series-types.js'

// styles
import './SeriesTypes.scss'

export default function SeriesTypes() {
  const { series, category } = useParams()
  const navigate = useNavigate()

  const handleSelection = (path) => {
    navigate(path)
  }

  return (
    <div className='series-card-types-container'>
      {series && !category && seriesTypes[`${series}`]['categories'].map((t) => (
        <div key={t.path} onClick={() => handleSelection(`${t.path}`)}>
          <CardType typeName={t.title} path={t.path}/>
        </div>
      ))}
      {series && category && seriesTypes[`${series}`][`${category}`].map((t) => (
        <div key={t.path} onClick={() => handleSelection(`${t.path}`)}>
          <CardType typeName={t.title} path={t.path}/>
        </div>
      ))}
    </div>
  )
}