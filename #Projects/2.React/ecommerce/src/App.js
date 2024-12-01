// import './App.css';
import { Route, Routes } from "react-router-dom"; // App is wrapped in BrowserRouter in index.js
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
