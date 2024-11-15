// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>

    </>
  );
}

export default App;