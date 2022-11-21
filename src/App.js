import { Routes, Route } from 'react-router-dom';

import Header from './routes/header/header';
import Homepage from './routes/homepage';

function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
