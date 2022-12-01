import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// hooks
import { useAuthContext } from './hooks/useAuthContext'

// pages
import AccountSettings from './pages/account-settings/AccountSettings'
import AddCard from './pages/add-card/AddCard'
import Authentication from './pages/authentication/Authentication'
import Collection from './pages/collection/Collection'
import Collections from './pages/collections/Collections'
import Home from './pages/home/Home'
import MainPage from './pages/main-page/MainPage'
import EnterCard from './pages/add-card/components/enter-card/EnterCard'
import SeriesTypes from './pages/add-card/components/series-types/SeriesTypes'
import Series from './pages/add-card/components/series/Series'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div>
      {authIsReady && 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user ? <Navigate to='/home' /> : <Authentication />} />
            <Route path='/' element={user ? <MainPage /> : <Navigate to='/' />} >
              <Route path='/home' element={user ? <Home /> : <Navigate to='/' />} />
              <Route path='account' element={user ? <AccountSettings /> : <Navigate to='/' />} />
              <Route path='add' element={user ? <AddCard /> : <Navigate to='/' />}>
                <Route path='' element={user ? <Series /> : <Navigate to='/' />} />
                <Route path=':series' element={user? <SeriesTypes /> : <Navigate to='/' />} />
                <Route path=':series/:category' element={user? <SeriesTypes /> : <Navigate to='/' />} />
                <Route path=':series/:category/:type' element={user ? <EnterCard /> : <Navigate to='/' />} />
              </Route>
              <Route path='collections' element={user ? <Collections /> : <Navigate to='/' />} />
              <Route path=':year/:collection' element={<Collection />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}
export default App