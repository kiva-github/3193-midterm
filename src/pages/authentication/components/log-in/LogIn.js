import { useState } from 'react'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

// hooks
import { useLogin } from '../../../../hooks/useLogin'

// styles
import './LogIn.scss'

export default function LogIn({ col }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isPending, logIn } = useLogin()

  const handleLogin = () => {
    logIn(email, password)
  }

  return (
    <div className='log-in-container'>
      <InputsContainer>
          <InputBar type='email' pH='EMAIL' col={col} value={email} updateValue={setEmail}/>
          <InputBar type='password' pH='PASSWORD' col={col} value={password} updateValue={setPassword}/>
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
      {error && <p className='error'>{error}</p>}
    </div>
  )
}