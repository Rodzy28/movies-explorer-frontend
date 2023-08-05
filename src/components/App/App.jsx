import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

export default function App() {
  return (
      <div className='page'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
    </div>
  );
}