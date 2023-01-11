import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { About } from './pages/About';
import { Home } from './pages/Home';



const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default App

