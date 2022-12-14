import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Share/NavBar';
import { Routes, Route} from "react-router-dom";
import Footer from './Pages/Share/Footer';
import LogIn from './Pages/LogIn.js/LogIn';
import SignUp from './Pages/LogIn.js/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequiredAuth from './Pages/Share/RequiredAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Orders from './Pages/Dashboard/Orders';
import AddProduct from './Pages/Dashboard/AddProduct';
import Users from './Pages/Dashboard/Users';
import CartProduct from './Pages/Dashboard/CartProduct';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './Hook/useAdmin';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RequiredAdmin from './Pages/Share/RequiredAdmin';

function App() {
  const [user] = useAuthState (auth );
 




  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home/>} />
        <Route path="login" element={<LogIn/>} />
        <Route path="signup" element={<SignUp/>} />
         <Route path="dashboard" element={
        <RequiredAuth><RequiredAdmin ><Dashboard/> </RequiredAdmin></RequiredAuth>}>
       <Route index element={<Orders/>}></Route>
       <Route path='addProduct' element={<AddProduct/>}></Route>
       <Route path='users'element={<Users/>}></Route>
       <Route path='cartProduct'  element={<CartProduct/>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
