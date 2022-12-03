// components
import ActionField from '../../../../components/action-field/ActionField'
import InputBar from '../../../../components/input-bar/InputBar'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'
import ValueBar from '../../../../components/value-bar/ValueBar'

// context
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { useUserContext } from '../../../../hooks/useUserContext'

// data
import { TEAM_LOGOS } from '../../../../data/team-logos'

// styles
import './AccountDetails.scss'

export default function AccountDetails() {
  const { user } = useAuthContext()
  const { teamIndex } = useUserContext()

  return (
    <div className='acc-details-container'>
      {teamIndex &&
        <ActionField>
          <ValueBar val={TEAM_LOGOS.current[teamIndex].name} img={TEAM_LOGOS.current[teamIndex].logo}/>
          <SecondaryBtn title='CHANGE TEAM' />
        </ActionField>
      }
      <ActionField>
        <InputBar type={'text'} value={user.displayName}/>
        <SecondaryBtn title='CHANGE USERNAME' />
      </ActionField>
      <ActionField>
        <InputBar type={'text'} value={user.email}/>
        <SecondaryBtn title='CHANGE EMAIL' />
      </ActionField>
    </div>
  )
}