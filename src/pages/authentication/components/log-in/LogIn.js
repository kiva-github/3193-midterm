// styles
import './LogIn.scss'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

export default function LogIn({ col }) {
  return (
    <div className='log-in-container'>
      <InputsContainer>
          <InputBar type='email' col={col} pH='EMAIL' />
          <InputBar type='password' col={col} pH='PASSWORD' />
      </InputsContainer>
      <PrimaryBtn title='LOG IN'/>
    </div>
  )
}
