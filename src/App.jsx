import Preload from './components/preload';
import Search from './components/search';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Preload />} />
        <Route path='search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
