import { useState } from 'react'

// styles
import './AccountSettings.scss'

// components
import NavHeader from '../../components/nav-header/NavHeader'
import AccountDetails from './components/account-details/AccountDetails'
import ChangePassword from './components/change-password/ChangePassword'

export default function AccountSettings() {
  const [active, setActive] = useState('details')
  const [accToggle, setAccToggle] = useState('details')

  const handleClick = (t) => {
    setAccToggle(t)
    setActive(t)
  }

  return (
    <div className='account-settings-container'>

        <NavHeader title='ACCOUNT SETTINGS' />

        <div className='acc-settings-toggle'>
          <p className={active === 'details' ? 'underline' : ''} onClick={() => handleClick('details')}>ACCOUNT DETAILS</p>
          <p className={active === 'password' ? 'underline' : ''} onClick={() => handleClick('password')}>CHANGE PASSWORD</p>
        </div>

        {accToggle === 'details' ? <AccountDetails /> : <ChangePassword />}
    </div>
  )
}
