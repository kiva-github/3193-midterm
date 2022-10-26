import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages
import AccountSettings from './pages/account-settings/AccountSettings';
import AddCard from './pages/add-card/AddCard';
import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home';
import MainPage from './pages/main-page/MainPage';

// components
import SeriesCardTypes from './pages/add-card/components/series-card-types/SeriesCardTypes';
import YearPacks from './pages/add-card/components/year-packs/YearPacks';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='auth' element={<Authentication />} />
          <Route path='' element={<MainPage />}>
            <Route path='' element={<Home />} />
            <Route path='account' element={<AccountSettings />} />
            <Route path='add' element={<AddCard />}>
              <Route path='' element={<YearPacks />} />
              <Route path=':series' element={<SeriesCardTypes />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
