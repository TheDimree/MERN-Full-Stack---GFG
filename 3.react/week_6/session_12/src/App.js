import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Nav from "./components/Nav";
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';
import Exception from './components/Exception';
import Mymemo from './components/Mymemo';
import Mycallback from './components/Mycallback';
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
             <Route path='exception' element={<Exception />}/>
             <Route path='usememo' element={<Mymemo />}/>
             <Route path='usecallback' element={<Mycallback />}/>
          </Routes>
       </section>
    </Router>
    </div>
  );
}

export default App;
