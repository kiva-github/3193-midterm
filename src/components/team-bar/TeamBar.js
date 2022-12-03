import { useState } from 'react'

// context
import { useUserContext } from '../../hooks/useUserContext'

// data
import { TEAM_LOGOS } from '../../data/team-data'

// styles
import './TeamBar.scss'

export default function TeamBar({ val, img, expanded=false }) {
    const [selectedTeam, setSelectedTeam] = useState('SEA')
    const { dispatch } = useUserContext()

    const changeSelectedTeam = (team) => {
        setSelectedTeam(team)
        dispatch({ type: 'UPDATE_TEAM', payload: team})

    }

    return (
        <div className={expanded ? 'team-bar-expanded-container panel-bg' : 'team-bar-container panel-bg'}>
            {!expanded && <>
                <img className="circle-img-left" src={img} alt="" />
                <h3>{val}</h3>
            </>}
            {expanded && <div className='team-selection-container'>
                {TEAM_LOGOS.current.map((team) => (
                    <div key={team.teamID} className={team.teamID === selectedTeam ? 'team-circle selected dropshadow' : 'team-circle'} onClick={() => setSelectedTeam(team.teamID)}>
                        <img src={team.logo} alt={team.name}/>
                    </div>
                ))}
            
            
            </div>}
        </div>
        )
}
