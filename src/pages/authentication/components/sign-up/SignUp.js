import { useState } from 'react'

// styles
import './SignUp.scss'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

// hooks
import { useSignup } from '../../../../hooks/useSignup'

export default function SignUp({ col }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { signup, isPending, error  } = useSignup()

  return (
    <div className='sign-up-container'>
      <InputsContainer>
          <InputBar type='text' col={col} pH='USERNAME' value={username} updateValue={setUsername}/>
          <InputBar type='email' col={col} pH='EMAIL' value={email} updateValue={setEmail}/>
          <InputBar type='password' col={col} pH='PASSWORD' value={password} updateValue={setPassword}/>
          <InputBar type='password' col={col} pH='CONFIRM PASSWORD' value={confirmPassword} updateValue={setConfirmPassword}/>
      </InputsContainer>
      <div onClick={() => signup(email, password, confirmPassword, username)}>
        {!isPending && <PrimaryBtn title='SIGN UP'/>}
        {isPending && <PrimaryBtn title='LOADING...'/>}
      </div>
      
      {error && <p>{error.message}</p>}
    </div> 
  )
}
