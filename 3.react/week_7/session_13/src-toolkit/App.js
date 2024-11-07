import React from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Counter'
import Products from './components/Products'
const App = () => {
  return (
    <main>
      <Router>
       <NavBar />
       <section className='container'>
          <Routes>
             <Route path='' element={<Home />}/>
             <Route path='counter' element={<Counter />}/>
             <Route path='products' element={<Products />}/>
          </Routes>
       </section>
       </Router>
    </main>
  )
}

export default App