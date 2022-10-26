// styles
import './ChangePassword.scss'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'

export default function ChangePassword() {
  return (
    <div className='change-password-container'>
        <InputsContainer>
            <InputBar type={'password'} col={'51,51,51'} pH={'NEW PASSWORD'} />
            <InputBar type={'password'} col={'51,51,51'} pH={'CONFIRM NEW PASSWORD'} />
        </InputsContainer>
        <SecondaryBtn title='UPDATE PASSWORD'/>
    </div>
  )
}
