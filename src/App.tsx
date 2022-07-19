import { Route, Routes } from 'react-router-dom'

import Header from './Header/header';
import Home from './Home/home';
import Footer from './Footer/footer';

import './App.scss';

export default function App() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}
