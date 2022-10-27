import { useState } from 'react'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

// hooks
import { useSignup } from '../../../../hooks/useSignup'

// styles
import './SignUp.scss'

export default function SignUp({ col }) {
  const [favoriteTeam, setFavoriteTeam] = useState(12)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { error, isPending, signup } = useSignup()

  const handleChange = (e) => {
    setFavoriteTeam(e.target.value)
  }

  return (
    <div className='sign-up-container'>
      <InputsContainer>
          <select
            className='favorite-team-select'
            name='teams'
            id='teams'
            onChange={handleChange}
            style={{ backgroundColor: `rgb(${col})`}}
          >
            <option value='' defaultValue>FAVORITE TEAM</option>
            <option value='' disabled>---AL WEST---</option>
              <option value='0'>Angels</option>
              <option value='1'>Astros</option>
              <option value='2'>Athletics</option>
              <option value='12'>Mariners</option>
              <option value='20'>Rangers</option>
            <option value='' disabled>---AL CENTRAL---</option>
              <option value='11'>Guardians</option>
              <option value='25'>Royals</option>
              <option value='26'>Tigers</option>
              <option value='27'>Twins</option>
              <option value='28'>White Sox</option>
            <option value='' disabled>---AL EAST---</option>
              <option value='3'>Blue Jays</option>
              <option value='16'>Orioles</option>
              <option value='21'>Rays</option>
              <option value='22'>Red Sox</option>
              <option value='29'>Yankees</option>
            <option value='' disabled>---NL WEST---</option>
               <option value='8'>Diamondbacks</option>
              <option value='9'>Dodgers</option>
              <option value='10'>Giants</option>
              <option value='17'>Padres</option>
              <option value='24'>Rockies</option>
            <option value='' disabled>---NL CENTRAL---</option>
              <option value='5'>Brewers</option>
              <option value='6'>Cardinals</option>
              <option value='7'>Cubs</option>
              <option value='19'>Pirates</option>
              <option value='23'>Reds</option>
            <option value='' disabled>---NL EAST---</option>
              <option value='4'>Braves</option>
              <option value='13'>Marlins</option>
              <option value='14'>Mets</option>
              <option value='15'>Nationals</option>
              <option value='18'>Phillies</option>
          </select>
          <InputBar type='text' col={col} pH='USERNAME' value={username} updateValue={setUsername}/>
          <InputBar type='email' col={col} pH='EMAIL' value={email} updateValue={setEmail}/>
          <InputBar type='password' col={col} pH='PASSWORD' value={password} updateValue={setPassword}/>
          <InputBar type='password' col={col} pH='CONFIRM PASSWORD' value={confirmPassword} updateValue={setConfirmPassword}/>
      </InputsContainer>
      <div onClick={() => signup(email, password, confirmPassword, username, favoriteTeam)}>
        {!isPending && <PrimaryBtn title='SIGN UP'/>}
        {isPending && <PrimaryBtn title='LOADING...'/>}
      </div>
      {error && <p>{error.message}</p>}
    </div> 
  )
}
