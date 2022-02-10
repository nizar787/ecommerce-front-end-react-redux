
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import {Route,Routes} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<About />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart/>} />
        {/* <Route path='/about' element={} /> */}
        <Route path='/contact' element={<Contact />} />
        {/*<Redirect to='/' />*/}
      </Routes>
      <Footer />
    </>
  )
}

export default App
