import { Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './routes/header/header';
import Homepage from './routes/homepage/homepage';

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/pictures' />
          <Route path='/values' />
          <Route path='/badges' />
          <Route path='/games' />
        </Routes>
      </main>
    </>
  );
}

export default App;
