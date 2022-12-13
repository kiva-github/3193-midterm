import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// hooks
import { useAuthContext } from './hooks/useAuthContext'

// pages
import AccountSettings from './pages/account-settings/AccountSettings'
import AddCard from './pages/add-card/AddCard'
import Authentication from './pages/authentication/Authentication'
import CollectionView from './pages/my-cards/components/collection-view/CollectionView'
import CollectionCardView from './pages/collection-card-view/CollectionCardView'
import Home from './pages/home/Home'
import MainPage from './pages/main-page/MainPage'
import MyCards from './pages/my-cards/MyCards'
import EnterCard from './pages/add-card/components/enter-card/EnterCard'
import SeriesSelection from './pages/add-card/components/series-selection/SeriesSelection'
import SeriesTypes from './pages/add-card/components/series-types/SeriesTypes'

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
                <Route path='' element={user ? <SeriesSelection /> : <Navigate to='/' />} />
                <Route path=':series' element={user ? <SeriesTypes /> : <Navigate to='/' />} />
                <Route path=':series/:category' element={user ? <SeriesTypes /> : <Navigate to='/' />} />
                <Route path=':series/:category/:type' element={user ? <EnterCard /> : <Navigate to='/' />} />
              </Route>
              <Route path='my-cards' element={user ? <MyCards /> : <Navigate to='/' />} >
                <Route path='' element={user ? <SeriesSelection /> : <Navigate to='/' />} />
                <Route path=':series' element={user ? <SeriesTypes /> : <Navigate to='/' />} />
                <Route path=':series/:category' element={user ? <SeriesTypes /> : <Navigate to='/' />} />
                <Route path=':series/:category/:type' element={user ? <CollectionView /> : <Navigate to='/' />} />
                <Route path=':series/:category/:type/:cardNum' element={user ? <CollectionCardView /> : <Navigate to='/' />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}
export default App