import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
const App = () => {
  return (
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id/:name" element={<ProfilePage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;