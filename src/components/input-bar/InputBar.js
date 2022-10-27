// data
import { GRADIENT_DATA } from '../../data/gradients'

// firebase
import { useUserContext } from '../../hooks/useUserContext'

// styles
import './InputBar.scss'

export default function InputBar({ type, pH="", col, value, updateValue }) {
  const { teamIndex } = useUserContext()

  return (
    <>
      {teamIndex && (
        <input
            type={type}
            onChange={(e) => updateValue(e.target.value)}
            style={{ backgroundColor: `rgb(${GRADIENT_DATA[teamIndex][1]})`}}
            placeholder={pH}
            value={value}
        >
        </input>
      )}
      {!teamIndex && (
        <input
            type={type}
            onChange={(e) => updateValue(e.target.value)}
            style={{ backgroundColor: `rgb(${col})`}}
            placeholder={pH}
            value={value}
        >
        </input>
      )}
    </>
  )
}


  
