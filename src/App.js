import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Form from './pages/Form'
import { List } from './pages/List';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='form/:id' element={<Form/>}/>
        <Route path='list' element={<List/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
