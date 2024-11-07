import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home'

// * Session 13 imports 
// import MainOld from './components/1.redux-old/MainOld'
// import NavbarOld from './components/1.redux-old/NavbarOld'

// * Session 14 imports
import Navbar from './components/Navbar'
import MainNew from './components/2.redux-new/MainNew'
import Products from './components/3.session/Products'


const App = () => {
  return (
    <main>
      <Router>
       {/* <NavbarOld />  */}
       <Navbar />
       <section className='container'>
          <Routes>
             <Route path='' element={<Home />}/>
            
            {/* // * Old Redux Session 13 */}
            {/* <Route path='/old-redux' element={<MainOld title="Old Redux Way" />}/> */}
            
            {/* ///* Redux Toolkit  Session 14 */}
            <Route path='/new-redux' element={<MainNew title="New Redux Way" />}/>
            <Route path='/products' element={<Products title="Latest Products" />}/>
            {/* <Route path='/cart' element={<MainNew title="New Redux Way" />}/> */}
          </Routes>
       </section>
       </Router>
    </main>
  )
}

export default App