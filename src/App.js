
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <BrowserRouter>
     <Header/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
     </div>
  );
}

export default App;
