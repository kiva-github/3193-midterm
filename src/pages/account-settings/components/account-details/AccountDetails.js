// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

// context
import { useAuthContext } from '../../../../hooks/useAuthContext'

// styles
import './AccountDetails.scss'

export default function AccountDetails() {
  const { user } = useAuthContext()

  return (
    <div className='acc-details-container'>
        <div className='fav-team-container'>
            <div className='fav-team-logo'></div>
            <PrimaryBtn title='CHANGE TEAM' />
        </div>
        <InputsContainer>
            <InputBar type={'text'} col={'51,51,51'} value={user.displayName}/>
            <InputBar type={'email'} col={'51,51,51'} value={user.email}/>
        </InputsContainer>
    </div>
  )
}