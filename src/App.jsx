import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

/**
 * The main App component that wraps the app with global state (MovieProvider)
 * and sets up routing for Home and Favorites pages.
 */
function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
