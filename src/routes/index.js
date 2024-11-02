import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormLogin from '../components/Nav/FormLogin';
import Product from '../components/Product';
import Nav from '../components/Nav';
import Home from '../layout/Home';
import Category from '../components/Category';
import Cart from '../components/Cart';
import Order from '../layout/Order';
import Footer from '../components/Footer';

const AppRoutes = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="" element={<Order />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;
