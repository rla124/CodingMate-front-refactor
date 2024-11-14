import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';

import Error from './pages/404';

import Landing from './pages/landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path={`${ROUTES.ERROR}`} element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
