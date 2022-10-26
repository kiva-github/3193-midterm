// styles
import './AccountDetails.scss'

// components
import InputBar from '../../../../components/input-bar/InputBar'
import InputsContainer from '../../../../components/inputs-container/InputsContainer'
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'

export default function AccountDetails() {
  return (
    <div className='acc-details-container'>

        <div className='fav-team-container'>
            <div className='fav-team-logo'></div>
            <PrimaryBtn title='CHANGE TEAM' />
        </div>

        <InputsContainer>
            <InputBar type={'text'} col={'51,51,51'} pH={'@LOOT1'}/>
            <InputBar type={'email'} col={'51,51,51'} pH={'kiva@email.com'}/>
        </InputsContainer>
        
    </div>
  )
}
