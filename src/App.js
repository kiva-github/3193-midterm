import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// hooks
import { useAuthContext } from './hooks/useAuthContext'

// pages
import AccountSettings from './pages/account-settings/AccountSettings'
import AddCard from './pages/add-card/AddCard'
import Authentication from './pages/authentication/Authentication'
import CollectionCardView from './pages/collection-card-view/CollectionCardView'
import Home from './pages/home/Home'
import MainPage from './pages/main-page/MainPage'
import MyCards from './pages/my-cards/MyCards'
import EnterCard from './pages/add-card/components/enter-card/EnterCard'
import SeriesTypes from './pages/add-card/components/series-types/SeriesTypes'
import Series from './pages/add-card/components/series/Series'
import MyCardsYear from './pages/my-cards-year/MyCardsYear'

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
              <Route path='my-cards/:year' element={<MyCardsYear />} />
              <Route path='my-cards/:year/:series' element={<MyCards />} />
              <Route path='my-cards/:year/:series/:cardNumber' element={<CollectionCardView />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}
export default App