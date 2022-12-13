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
import './MyCards.scss'

const cardDataDict = {
    's1-2022': {
      'base-set': {
        'base': S1_22_base,
        'base-clear-variation': S1_22_base,
        // 'base-clear-varation': S1_22_base_clear_variation
      }
    },
    's2-2022': {
      'base-set': {
        'base': S2_22_base,
      }
    },
    'us-2022': {
      'base-set': {
        'base': US_22_base
      }
    }
}

export default function MyCards() {
    const { series, category, type, cardNum } = useParams()
    const [headerPath, setHeaderPath] = useState('MY CARDS')
    const [headerRoute, setHeaderRoute] = useState('/')
    const [headerPathConcat, setHeaderPathConcat] = useState('')
    const { dispatch } = useCardContext()

    useEffect(() => {
        setHeaderPath('MY CARDS')
        let currPath = ''
        let currRoute = '/'
        if (series) {
          currPath += ` / ${series.toUpperCase()}`
          if (category) {
            currPath += ` / ${category.toUpperCase()}`
            if (type) {
              currPath += ` / ${type.toUpperCase()}`
              dispatch({ type: 'UPDATE_CARD_DATA', payload: cardDataDict[`${series}`][`${category}`][`${type}`]})
              currRoute = `/my-cards/${series}/${category}`
              if (cardNum) {
                currPath += ` / ${cardNum.toUpperCase()}`
                currRoute = `/my-cards/${series}/${category}/${type}`
              }
            } else {
              dispatch({ type: 'UPDATE_CARD_DATA', payload: cardDataDict[`${series}`][`${category}`]})
              currRoute = `/my-cards/${series}`
            }
          } else {
            dispatch({ type: 'UPDATE_CARD_DATA', payload: cardDataDict[`${series}`]})
            currRoute = '/my-cards'
          }
        }
        setHeaderRoute(currRoute)
        setHeaderPathConcat(currPath)
      }, [dispatch, series, category, type, cardNum])

    return (
        <div className='my-cards-container'>
            <Header btnNav={headerRoute} navPath={`${headerPath} ${headerPathConcat}`} acctStats={true} />
            <Outlet /> 
        </div>
    )
}