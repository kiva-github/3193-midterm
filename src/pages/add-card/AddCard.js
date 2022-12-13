import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'

// components
import Header from '../../components/header/Header'

// context
import { useCardContext } from '../../hooks/useCardContext'

// data
import { S1_22_base } from '../../data/cards-data/2022/S1_22/S1_22_base'
import { S2_22_base } from '../../data/cards-data/2022/S2_22/S2_22_base'
import { US_22_base } from '../../data/cards-data/2022/US_22/US_22_base'

// styles
import './AddCard.scss'

const cardDataDict = {
  's1-2022': {
    'base-set': {
      'base': S1_22_base
    }
  },
  's2-2022': {
    'base-set': {
      'base': S2_22_base
    }
  },
  'us-2022': {
    'base-set': {
      'base': US_22_base
    }
  }
}

export default function AddCard() {
  const { series, category, type } = useParams()
  const [headerPath, setHeaderPath] = useState('ADD CARD')
  const [headerPathConcat, setHeaderPathConcat] = useState('')
  const { dispatch } = useCardContext()

  useEffect(() => {
    setHeaderPath('ADD CARD')
    let currPath = ''
    if (series) {
      currPath += ` / ${series.toUpperCase()}`
      dispatch({ type: 'UPDATE_CARD_DATA', payload: cardDataDict[`${series}`]})
      if (category) {
        currPath += ` / ${category.toUpperCase()}`
        dispatch({ type: 'UPDATE_CARD_DATA', payload: cardDataDict[`${series}`][`${category}`]})
        if (type) {
          currPath += ` / ${type.toUpperCase()}`
          dispatch({ type: 'UPDATE_CARD_DATA', payload: cardDataDict[`${series}`][`${category}`][`${type}`]})
        }
      }
    }
    setHeaderPathConcat(currPath)
  }, [dispatch, series, category, type])
  
  return (
    <div className='add-card-container'>
      <Header btnNav={-1} navPath={`${headerPath} ${headerPathConcat}`} acctStats={true} />
        <Outlet />
    </div>
  )
}