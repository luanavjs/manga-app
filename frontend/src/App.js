import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import BookDetailsView from './views/BookDetailsView';
import HomeView from "./views/HomeView";

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/book/:id' element={<BookDetailsView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
