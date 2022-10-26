import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// pages
import Authentication from './pages/authentication/Authentication';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Authentication />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
