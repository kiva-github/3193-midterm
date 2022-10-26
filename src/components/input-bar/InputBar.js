// styles
import './InputBar.scss'

export default function InputBar({ type, col, pH }) {
  return (
    <input
        type={type}
        style={{ backgroundColor: `rgb(${col})`}}
        placeholder={pH}
    >
    </input>
  )
}
