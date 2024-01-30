import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/global.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './pages/Home';
import RegAnimais from './pages/RegAnimais';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais" element={<RegAnimais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
