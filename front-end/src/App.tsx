import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './domain/Error404';
import SignIn from './domain/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
