import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/global.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './pages/Home';
import RegAnimais from './pages/RegAnimais';
import RegNutricao from './pages/RegNutricao';
import TableAnimais from './pages/TableAnimais';
import TableNutricao from './pages/TableNutricao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro">
          <Route path="animais" element={<RegAnimais />} />
          <Route path="nutricao" element={<RegNutricao />} />
        </Route>
        <Route path="tabelas">
          <Route path="animais" element={<TableAnimais />} />
          <Route path="nutricao" element={<TableNutricao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
