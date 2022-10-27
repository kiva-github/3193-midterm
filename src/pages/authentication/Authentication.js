import { useEffect, useState } from 'react'

// components
import Header from '../../components/header/Header'
import LogIn from './components/log-in/LogIn'
import SignUp from './components/sign-up/SignUp'

// data
import { GRADIENT_DATA } from '../../data/gradients'

// styles
import './Authentication.scss'

export default function Authentication() {
    const [randomInt, setRandomInt] = useState(null)
    const [authToggle, setAuthToggle] = useState('login')

    useEffect(() => {   
        let random = Math.floor(Math.random() * 30)
        if (random === 0) {
            random = 13
        }
        setRandomInt(random)
    }, [])

  return (
    <>
        {randomInt && 
            <div className='authentication-container'
                style={
                    {
                        background: `radial-gradient(circle, rgba(${GRADIENT_DATA[randomInt][0]}) 25%, rgba(${GRADIENT_DATA[randomInt][1]}) 100%)`
                    }
                }>
                <Header setAuthToggle={setAuthToggle}/>
                {authToggle === 'login' ? <LogIn col={GRADIENT_DATA[randomInt][1]}/> : <SignUp col={GRADIENT_DATA[randomInt][1]}/>}
            </div>
        }
    </>
  )
}