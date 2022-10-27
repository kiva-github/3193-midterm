// styles
import './InputBar.scss'

export default function InputBar({ type, col, pH, value, updateValue }) {




  return (
    <input
        type={type}
        onChange={(e) => updateValue(e.target.value)}
        style={{ backgroundColor: `rgb(${col})`}}
        placeholder={pH}
        value={value}
    >
    </input>
  )
}
