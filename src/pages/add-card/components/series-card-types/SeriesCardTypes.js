import { useParams } from 'react-router-dom'

// styles
import './SeriesCardTypes.scss'

// datas
import { seriesTypes } from '../../../../data/seriesTypes'

// components
import Card from '../../../../components/card/Card'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'

export default function SeriesCardTypes() {
  const { series } = useParams()

  return (
    <div className='series-card-types-container'>
      {seriesTypes[series].map((type) => (
        <div key={type.id} className='series-type-container'>
          <div className='card-preview-container'>
            <Card img={type.img}/>
            <h3>{type.title}</h3>
          </div>
          <div className='card-entry-container'>
            <h3>ENTER CARD NUMBER</h3>
            <input></input>
            <SecondaryBtn title='ADD CARD'/>
          </div>
        </div>
      ))}
    </div>
  )
}
