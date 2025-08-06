import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  // const myRouter = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<RootLayout />}>
  //       <Route index element={<Home />} />
  //       <Route path='about' element={<About />} />
  //       <Route path='birthday-decoration' element={<BirthdayDecoration />} />
  //       <Route path='anniversary-decoration' element={<AnniversaryDecoration />} />
  //       <Route path='baby-shower' element={<BabyShower />} />
  //       <Route path='kids-birthday' element={<KidsBirthday />} />
  //       <Route path='banquet-hall' element={<BanquetHalls />} />
  //       <Route path='just-married' element={<JustMarried />} />
  //       <Route path='room-decoration' element={<RoomDecoration />} />
  //       <Route path='gallery' element={<Ourgallery />} />
  //       <Route path='contact' element={<Contact />} />
  //     </Route>
  //   )
  // )

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
