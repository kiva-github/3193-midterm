import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// components
import SeriesCardTypes from './pages/add-card/components/series-card-types/SeriesCardTypes'
import YearPacks from './pages/add-card/components/year-packs/YearPacks'

// hooks
import { useAuthContext } from './hooks/useAuthContext'

// pages
import AccountSettings from './pages/account-settings/AccountSettings'
import AddCard from './pages/add-card/AddCard'
import Authentication from './pages/authentication/Authentication'
import Collection from './pages/collection/Collection'
import Home from './pages/home/Home'
import MainPage from './pages/main-page/MainPage'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div>
      {authIsReady && 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user ? <Navigate to='/home' /> : <Authentication />} />
            <Route path='/' element={user ? <MainPage /> : <Navigate to='/'/>} >
              <Route path='/home' element={user ? <Home /> : <Navigate to='/'/>} />
              <Route path='account' element={user ? <AccountSettings /> : <Navigate to='/'/>} />
              <Route path='add' element={user ? <AddCard /> : <Navigate to='/'/>}>
                <Route path='' element={user ? <YearPacks /> : <Navigate to='/'/>} />
                <Route path=':series' element={user? <SeriesCardTypes /> : <Navigate to='/'/>} />
              </Route>
              <Route path=':year/:collection' element={<Collection />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}
export default App