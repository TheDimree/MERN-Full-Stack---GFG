import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AuthRoutes from './components/HOC/AuthRoutes'
import Main from './components/LazyLoading/Main';
import FormHandling from './components/cu-components/FormHandling';
import UncontrolledComponents from './components/cu-components/UncontrolledComponents';

export default function App() {
  return (
    <div>
      <main>
        <Router>
        <Navbar />
        <section className="container mx-auto">
          <Routes>
            <Route path='/' element={<Home title='Home' />} />
            <Route path='/products' element={<Products title="Latest Products" />} />
            <Route path='/product-detail/:id' element={<ProductDetail title="Product Details" />} />
            <Route path='/hoc' element={
              <AuthRoutes>
                <Products title='High Ordered Components'/>
              </AuthRoutes>
            } />
            <Route path='/lazy-loading' element={ <Main title='Lazy Loading'/> } />
            <Route path='/form-handling' element={<FormHandling title='Form Handling Implementation' />} />
            <Route path='/cu-components' element={<UncontrolledComponents title='Controlled & Uncontrolled Components' />} />
            
          </Routes>
        </section>
        </Router>
      </main>
    </div>
  )
}