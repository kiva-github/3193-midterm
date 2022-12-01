import { useEffect, useState } from 'react'

// assets
import cover from '../../assets/collections/col-cover-1.png'

// styles
import './CollectionCard.scss'

export default function CollectionCard({ progress = 11, total = 20 }) {
    const [progressPercentage, setProgressPercentage] = useState(null)

    useEffect(() => {
        if (progress === 0) {
            setProgressPercentage(0)
        } else {
            let percentComplete = ((progress + 1) / (total + 1)) * 100
            setProgressPercentage(percentComplete)
        }
    }, [progress, total])

  return (
    <div className='collection-card-container'>
        <img src={cover} alt='' />
        <div className='title-container'>
            <h3>Chasing History</h3>
        </div>
        <div className='col-progress'>
            <div className='progress-bar'>
                <div
                    className='progress'
                    style={{ width: `${progressPercentage}%`}}
                ></div>
            </div>
            <h4>{progress}/{total}</h4>
        </div>
    </div>
  )
}
