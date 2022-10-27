import { useState } from 'react'

// styles
import './LogIn.scss'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

// hooks
import { useLogin } from '../../../../hooks/useLogin'

export default function LogIn({ col }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { logIn, error, isPending } = useLogin()

  const handleLogin = () => {
    logIn(email, password)
  }

  return (
    <div className='log-in-container'>
      <InputsContainer>
          <InputBar type='email' col={col} pH='EMAIL' value={email} updateValue={setEmail}/>
          <InputBar type='password' col={col} pH='PASSWORD' value={password} updateValue={setPassword}/>
      </InputsContainer>
      {!isPending &&
        <div onClick={handleLogin}>
          <PrimaryBtn title='LOG IN'/>
        </div>
      }
      {isPending && 
        <div onClick={handleLogin}>
          <PrimaryBtn title='LOG IN'/>
        </div>
      }
      {error && <p>{error.message}</p>}
      
    </div>
  )
}
