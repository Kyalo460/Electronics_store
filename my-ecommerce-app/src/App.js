import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main'
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';
import Sell from './Sell';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Cart' element={<ShoppingCart />} />
        <Route path='/Sell' element={<Sell />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
