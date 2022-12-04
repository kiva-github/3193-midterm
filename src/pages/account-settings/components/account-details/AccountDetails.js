import { useState } from 'react'

// components
import ActionField from '../../../../components/action-field/ActionField'
import InputBar from '../../../../components/input-bar/InputBar'
import SecondaryBtn from '../../../../components/btns/secondary-btn/SecondaryBtn'
import TeamBar from '../../../../components/team-bar/TeamBar'

// context
import { useAuthContext } from '../../../../hooks/useAuthContext'
import { useUserContext } from '../../../../hooks/useUserContext'
import { useGradientContext } from '../../../../hooks/useGradientContext'

// data
import { TEAM_LOGOS } from '../../../../data/team-data'

// firebase
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../utils/firebase/config'

// styles
import './AccountDetails.scss'

export default function AccountDetails() {
  const [changingTeam, setIsChangingTeam] = useState(false)
  const { user } = useAuthContext()
  const { teamIndex } = useUserContext()
  const { previewedGradients, previewedGradientsId, selectedGradients} = useGradientContext()

  const handleTeamChange = () => {
    if (changingTeam) {
      setIsChangingTeam(false)
      if (previewedGradients) {
        if (previewedGradients !== selectedGradients) {
          if (previewedGradientsId) {
            updateTeam(previewedGradientsId)
          }
        }
      }
    } else {
      setIsChangingTeam(true)
    }
  }

  const updateTeam = async (previewedGradientsId) => {
    const teamRef = doc(db, "users", user.uid)
    await updateDoc(teamRef, {
      favoriteTeam: previewedGradientsId
    })
  }

  return (
    <div className='acc-details-container'>
      {teamIndex &&
        <ActionField>
          <TeamBar selectedTeamId={teamIndex} val={TEAM_LOGOS.current[teamIndex].name} img={TEAM_LOGOS.current[teamIndex].logo} expanded={changingTeam}/>
          <div onClick={handleTeamChange}>
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