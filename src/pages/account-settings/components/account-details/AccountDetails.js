import { useState } from 'react'

// components
import ActionField from '../../../../components/action-field/ActionField'
import InputBar from '../../../../components/input-bar/InputBar'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'
import TeamBar from '../../../../components/team-bar/TeamBar'

// context
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { useUserContext } from '../../../../hooks/useUserContext'

// data
import { TEAM_LOGOS } from '../../../../data/team-data'

// styles
import './AccountDetails.scss'

export default function AccountDetails() {
  const [changingTeam, setIsChangingTeam] = useState(false)
  const { user } = useAuthContext()
  const { teamIndex } = useUserContext()

  return (
    <div className='acc-details-container'>
      {teamIndex &&
        <ActionField>
          <TeamBar val={TEAM_LOGOS.current[teamIndex].name} img={TEAM_LOGOS.current[teamIndex].logo} expanded={changingTeam}/>
          <div onClick={() => setIsChangingTeam(!changingTeam)}>
            <SecondaryBtn title={changingTeam ? 'DONE' : 'CHANGE TEAM'} />
          </div>
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