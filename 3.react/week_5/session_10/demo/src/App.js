import React,{lazy, Suspense} from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
//import About from './components/About';
import Notfound from './components/Notfound';

//import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import AuthRoute from './hoc/AuthRoutes';
import FormHandling from './components/FormHandling';
import Uncontrolled from './components/Uncontrolled';
const About=lazy(()=> import('./components/About'));
const Products=lazy(()=> import('./components/Products'));
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <section className='container'>
           <Routes>
              <Route path='' element={<Home /> }/>
              <Route path='formhandling' element={<FormHandling /> }/>
              <Route path='uncontrolled' element={<Uncontrolled /> }/>
              <Route path='about-us' element={
              <Suspense fallback={<div> Loading....</div>}>
                <AuthRoute>
                  <About />
                </AuthRoute>
              </Suspense>
               }/>
              <Route path='*' element={<Notfound /> }/>
              <Route path='products' element={
                 <Suspense fallback={<div> Loading....</div>}>
                   <AuthRoute>
                       <Products />
                  </AuthRoute>
                </Suspense>
              }/>
              <Route path='product-details/:id' element={<ProductDetails />}/>
           </Routes>
        </section>
        </Router>
    </div>
  )
}

export default App