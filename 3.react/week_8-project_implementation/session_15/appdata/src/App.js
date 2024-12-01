import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
const App = () => {
  return (
    <main>
    <Router>
      <Header />
        <section className='container' style={{maxHeight:'100%'}}>
           <Routes>
               <Route path='' element={<Home />}/>
               <Route path='products' element={<Products />}/>
               <Route path='product-details/:id' element={<ProductDetails />}/>
           </Routes>
        </section>
      {/* <Footer /> */}
      </Router>
    </main>
  )
}

export default App