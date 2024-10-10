import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Notfound from './components/Notfound';
import Noida from './components/child/Noida'
import Gurugram from './components/child/Gurugram'
import Mumbai from './components/child/Mumbai'
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <section className='container'>
          {/* load dynamic components when url is match with route  */}
          <Routes>
              <Route path='' element={<Home />}/>
              <Route path='about-us' element={<About />}/>
              <Route path='services' element={<Services />}/>
              <Route path='gallery' element={<Gallery />}/>
              <Route path='contact' element={<Contact />}>
                  <Route path='noida' element={<Noida/>}/>
                  <Route path='gurugram' element={<Gurugram/>}/>
                  <Route path='mumbai' element={<Mumbai/>}/>
              </Route>
              <Route path='*' element={<Notfound />}/>
          </Routes>
        </section>
        </Router>
    </div>
  )
}

export default App