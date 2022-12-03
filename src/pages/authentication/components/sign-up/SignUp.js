import { useEffect, useState } from 'react'

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

  useEffect(() => {
    if (error === 'Passwords do not match') {
      setPassword('')
      setConfirmPassword('')
    }
  }, [error])

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
              <option value='ANA'>Angels</option>
              <option value='HOU'>Astros</option>
              <option value='OAK'>Athletics</option>
              <option value='SEA'>Mariners</option>
              <option value='TEX'>Rangers</option>
            <option value='' disabled>---AL CENTRAL---</option>
              <option value='CLE'>Guardians</option>
              <option value='KC'>Royals</option>
              <option value='DET'>Tigers</option>
              <option value='MIN'>Twins</option>
              <option value='CWS'>White Sox</option>
            <option value='' disabled>---AL EAST---</option>
              <option value='TOR'>Blue Jays</option>
              <option value='BAL'>Orioles</option>
              <option value='TB'>Rays</option>
              <option value='BOS'>Red Sox</option>
              <option value='NYY'>Yankees</option>
            <option value='' disabled>---NL WEST---</option>
               <option value='ARI'>Diamondbacks</option>
              <option value='lAD'>Dodgers</option>
              <option value='SF'>Giants</option>
              <option value='SD'>Padres</option>
              <option value='COL'>Rockies</option>
            <option value='' disabled>---NL CENTRAL---</option>
              <option value='MIL'>Brewers</option>
              <option value='STL'>Cardinals</option>
              <option value='CHC'>Cubs</option>
              <option value='PIT'>Pirates</option>
              <option value='CIN'>Reds</option>
            <option value='' disabled>---NL EAST---</option>
              <option value='ATL'>Braves</option>
              <option value='FLA'>Marlins</option>
              <option value='NYM'>Mets</option>
              <option value='WSH'>Nationals</option>
              <option value='PHI'>Phillies</option>
          </select>
          <InputBar type='text' col={col} pH='USERNAME' value={username} updateValue={setUsername}/>
          <InputBar type='email' col={col} pH='EMAIL' value={email} updateValue={setEmail}/>
          <InputBar type='password' col={col} pH='PASSWORD' value={password} updateValue={setPassword}/>
          <InputBar type='password' col={col} pH='CONFIRM PASSWORD' value={confirmPassword} updateValue={setConfirmPassword}/>
          <div onClick={() => signup(email, password, confirmPassword, username, favoriteTeam)}>
            {!isPending && <PrimaryBtn title='SIGN UP'/>}
            {isPending && <PrimaryBtn title='LOADING...'/>}
          </div>
      </InputsContainer>
      <h6 className='agreement'><i>By continuing you agree to the</i> <b>CardVault Terms of Service</b><i>, and acknowledge you’ve read our </i><b>Privacy Policy</b>.</h6>
      {error && <p className='error'>{error}</p>}
    </div> 
  )
}