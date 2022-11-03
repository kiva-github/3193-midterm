import { useEffect, useState } from 'react'

// assets
import authImage from '../../assets/system/auth-image.png'
import logo from '../../assets/system/card-vault-logo.png'

// components
import LogIn from './components/log-in/LogIn'
import SignUp from './components/sign-up/SignUp'

// data
import { GRADIENT_DATA } from '../../data/gradients'

// styles
import './Authentication.scss'

export default function Authentication() {
    const [authToggle, setAuthToggle] = useState(null)
    const [randomInt, setRandomInt] = useState(null)
    
    useEffect(() => {
        setAuthToggle('signin')
        let random = Math.floor(Math.random() * 30)
        if (random === 0) {
            random = 13
        }
        setRandomInt(random)
    }, [])

    return (
        <>
            {randomInt && 
                <div
                    className='authentication-container'
                    style={
                        {
                            background: `radial-gradient(circle, rgba(${GRADIENT_DATA[randomInt][0]}) 25%, rgba(${GRADIENT_DATA[randomInt][1]}) 100%)`
                        }
                }>
                    <div
                        className='left-col'
                        style={
                            {
                                width: `${authToggle === 'signin' ? '50%' : '100%'}`
                            }
                        }
                    > 
                        <div className='left-col-content'>
                            <div className='logo-container'>
                                <img src={logo} alt='' />
                            </div>
                            <div className='toggle-container'>
                                <div className='toggle-option'>
                                    <p className={authToggle === 'signin' ? 'underline' : ''} onClick={() => setAuthToggle('signin')}>SIGN IN</p>
                                </div>
                                <div className='toggle-option'>
                                    <p className={authToggle === 'createanaccount' ? 'underline' : ''} onClick={() => setAuthToggle('createanaccount')}>CREATE AN ACCOUNT</p>
                                </div>
                            </div>
                            {authToggle === 'signin' ? <LogIn col={GRADIENT_DATA[randomInt][1]}/> : <SignUp col={GRADIENT_DATA[randomInt][1]}/>}
                        </div>
                    </div>
                    {authToggle === 'signin' && 
                        <div className='right-col'>
                            <div className='auth-image-container'>
                                <img src={authImage} alt='' />
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}