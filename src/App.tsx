import { Route, Routes } from 'react-router-dom'

import Header from './Header/header';
import Home from './Home/home';

import './App.scss';

export default function App() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
