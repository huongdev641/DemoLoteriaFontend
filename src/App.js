import './App.css';
import Category from './components/Category';
import Nav from './components/Nav';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
    return (
        <div className="grid place-items-center h-screen w-full">
            <div className="">
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
