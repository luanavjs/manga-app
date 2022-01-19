import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import BookDetailsView from './views/BookDetailsView';
import HomeView from "./views/HomeView";
import AddBookView from './views/AddBookView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/book/:id' element={<BookDetailsView/>}/>
        <Route path='/addBook' element={<AddBookView/>}/>
        <Route path='/login' element={<LoginView/>}/>
        <Route path='/register' element={<RegisterView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
