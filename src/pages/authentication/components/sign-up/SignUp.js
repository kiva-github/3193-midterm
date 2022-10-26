// styles
import './SignUp.scss'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

export default function SignUp({ col }) {
  return (
    <div className='sign-up-container'>
      <InputsContainer>
          <InputBar type='text' col={col} pH='USERNAME' />
          <InputBar type='email' col={col} pH='EMAIL' />
          <InputBar type='password' col={col} pH='PASSWORD' />
          <InputBar type='password' col={col} pH='CONFIRM PASSWORD' />
      </InputsContainer>
      <PrimaryBtn title='SIGN UP'/>
    </div> 
  )
}
