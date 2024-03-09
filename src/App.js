import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUS';
import Home from './Pages/Home/Index';
import CommonLayout from './Layouts/CommonLayout';
import AuthLayout from './Layouts/AuthLayout';
import Profile from './Pages/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommonLayout />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
          </Route>
          <Route path='/' element={<AuthLayout />} >
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
