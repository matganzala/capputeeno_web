import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { ShoppingCart } from './pages/shoppingCart';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/shopingcart" Component={ShoppingCart} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
