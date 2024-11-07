import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home'

import Navbar from './components/Navbar'
import MainNew from './components/redux-new/MainNew'
import Products from './components/2.syncing-session/Products'
import Middleware from './components/Middleware'


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
            
            {/* ///* Redux Toolkit */}
            <Route path='/new-redux' element={<MainNew title="New Redux Way" />}/>
            <Route path='/products' element={<Products title="Latest Products" />}/>
            <Route path='middleware' element={<Middleware />}/>
          </Routes>
       </section>
       </Router>
    </main>
  )
}

export default App