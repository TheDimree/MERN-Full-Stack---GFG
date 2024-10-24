import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Parent from './components/1.class-components/Parent';
import Navbar from './components/Navbar'; // Make sure the import path is correct
import Home from './components/Home';
import ProductsList from './components/2.crud/ProductsList';
import AddProduct from './components/2.crud/AddProduct';
import EditProduct from './components/2.crud/EditProduct'
import Main_eh from './components/3.error-handling/Main_eh'
import Main_mh from './components/4.usememo-hook/Main_mh';
import Main_ch from './components/5.usecallback-hook/Main_ch';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <section className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/crud' element={<ProductsList />}/>
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path='/edit-product/:id' element={<EditProduct />}/>
              <Route path='/class-components' element={<Parent />}/>
              <Route path='/exception' element={<Main_eh />} />
              <Route path='/use-memo' element={<Main_mh />} />
              <Route path='/use-callback' element={<Main_ch />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}
