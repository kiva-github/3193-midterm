import { useState } from 'react'
// components
import AccountDetails from './components/account-details/AccountDetails'
import ChangePassword from './components/change-password/ChangePassword'

// styles
import './AccountSettings.scss'
import Header from '../../components/header/Header'

export default function AccountSettings() {
  const [active, setActive] = useState('details')
  const [accToggle, setAccToggle] = useState('details')

  const handleClick = (t) => {
    setAccToggle(t)
    setActive(t)
  }

  return (
    <div className='account-settings-container'>
        <Header btnNav={-1} navPath={'ACCOUNT'} acctStats={true} acctTab={true}/>
        <div className='acc-settings-toggle'>
          <h3 className={active === 'details' ? 'underline' : ''} onClick={() => handleClick('details')}>ACCOUNT DETAILS</h3>
          <h3 className={active === 'password' ? 'underline' : ''} onClick={() => handleClick('password')}>CHANGE PASSWORD</h3>
        </div>
        {accToggle === 'details' ? <AccountDetails /> : <ChangePassword />}
    </div>
  )
}