import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages
import AccountSettings from './pages/account-settings/AccountSettings';
import AddCard from './pages/add-card/AddCard';
import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home';
import MainPage from './pages/main-page/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='auth' element={<Authentication />} />
          <Route path='' element={<MainPage />}>
            <Route path='' element={<Home />} />
            <Route path='account' element={<AccountSettings />} />
            <Route path='add' element={<AddCard />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
