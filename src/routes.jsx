import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/index';
import Favorites from '../src/pages/Favorites/index';
import Player from '../src/pages/Player/index';
import NotFound from '../src/pages/NotFound/index';
import BasePage from '../src/pages/BasePage/index';
import NewVideo from '../src/pages/NewVideo/index';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<BasePage />}> 
          <Route index element={<Inicio />} />
          <Route path="Favoritos" element={<Favorites />} />
          <Route path=":id" element={<Player />} />
          <Route path='*' element={<NotFound />} />
          <Route path='agregarvideo' element={<NewVideo />} />
          
          </Route> 
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

