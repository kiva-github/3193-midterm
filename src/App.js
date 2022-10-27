import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// hooks
import { useAuthContext } from './hooks/useAuthContext';

// pages
import AccountSettings from './pages/account-settings/AccountSettings';
import AddCard from './pages/add-card/AddCard';
import Authentication from './pages/authentication/Authentication';
import Collection from './pages/collection/Collection';
import Home from './pages/home/Home';
import MainPage from './pages/main-page/MainPage';

// components
import SeriesCardTypes from './pages/add-card/components/series-card-types/SeriesCardTypes';
import YearPacks from './pages/add-card/components/year-packs/YearPacks';

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
              <Route path='account' element={user? <AccountSettings /> : <Navigate to='/'/>} />
              <Route path='add' element={<AddCard />}>
                <Route path='' element={<YearPacks />} />
                <Route path=':series' element={<SeriesCardTypes />} />
              </Route>
              <Route path=':year/:collection' element={<Collection />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
