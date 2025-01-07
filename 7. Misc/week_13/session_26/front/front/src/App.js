import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Addproduct from "./components/Addproduct";
import { ProtectedRoute,AdminProtectedRoute } from "./components/ProtectRoutes";

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="" element={<Login />}/>
            <Route path="register" element={<Register />}/>
            <Route path="dashboard" element={
              <ProtectedRoute>
                 <Dashboard />
              </ProtectedRoute>
              }>
              <Route path="products" element={ <ProtectedRoute> <Product /> </ProtectedRoute>}/>
              <Route path="addproduct" element={ <AdminProtectedRoute> <Addproduct /> </AdminProtectedRoute>}/>
              <Route path="cart" element={<ProtectedRoute> <Cart /></ProtectedRoute>}/>
            </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
