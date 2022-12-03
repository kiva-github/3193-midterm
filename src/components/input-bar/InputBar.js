// hooks
import { useUserContext } from '../../hooks/useUserContext'

// styles
import './InputBar.scss'

export default function InputBar({ type, pH="", value, updateValue }) {
  const { teamIndex } = useUserContext()

  return (
    <>
      {teamIndex && (
        <input
            className='dropshadow panel-bg'
            type={type}
            onChange={(e) => updateValue(e.target.value)}
            style={{ bordeRadius: '22px'}}
            placeholder={pH}
            value={value}
        >
        </input>
      )}
    </>
  )
}