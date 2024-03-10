import './App.scss';
import UserContext from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUS';
import Home from './Pages/Home/Index';
import CommonLayout from './Layouts/CommonLayout';
import AuthLayout from './Layouts/AuthLayout';
import Profile from './Pages/Profile';
import NotFoundPage from './Pages/NotFoundPage';
import { useState } from 'react';
import LoginModal from './Components/Modals/Login';
import SignupModal from './Components/Modals/Signup';
function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  return (
    <div className="App">
      <UserContext.Provider value={{
        showLoginModal,
        showSignUpModal,
        setShowLoginModal,
        setShowSignUpModal
      }}>
        <LoginModal />
        <SignupModal/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CommonLayout />} >
              <Route index element={<Home />} />
              <Route path='/about' element={<AboutUs />} />
            </Route>
            <Route path='/' element={<AuthLayout />} >
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
