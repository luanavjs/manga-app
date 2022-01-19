import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import BookDetailsView from './views/BookDetailsView';
import HomeView from "./views/HomeView";
import AddBookView from './views/AddBookView';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/book/:id' element={<BookDetailsView/>}/>
        <Route path='/addBook' element={<AddBookView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
