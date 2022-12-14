import { Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './routes/header/header';
import Homepage from './routes/homepage/homepage';
import PledgeAndValues from './routes/pledge-and-values/pledgeandvalues';
import Badges from './routes/badges/badges';
import Members from './routes/members/members';
import Songs from './routes/songs/songs';

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/members' element={<Members />}/>
          <Route path='/pledge-and-values' element={<PledgeAndValues />}/>
          <Route path='/badges' element={<Badges />} />
          <Route path='/songs/' element={<Songs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
