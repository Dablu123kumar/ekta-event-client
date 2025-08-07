import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Chat from './components/Chat';

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar/>
      <div>
      <Outlet/>
      <Chat/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
