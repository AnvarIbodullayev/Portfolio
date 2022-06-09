import { Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { AuthContextProvider } from './context/AuthContext';
import useLocalStorage from 'use-local-storage';
import Account from './components/Account/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Whoami from './components/Whoami/Whoami';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/whoami' element={<Whoami />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
