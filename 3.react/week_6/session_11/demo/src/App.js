import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Nav from "./components/Nav";
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
function App() {
  return (
    <div>
    <Router>
       <Nav />
       <section className="container">
          <Routes>
             <Route path='' element={<Home />}/>
             <Route path='addproduct' element={<AddProduct />}/>
             <Route path='edit-product/:id' element={<EditProduct />}/>
          </Routes>
       </section>
    </Router>
    </div>
  );
}

export default App;
